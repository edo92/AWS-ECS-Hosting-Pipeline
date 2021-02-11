import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import * as path from "path";
import * as webpack from "webpack";

class Settings {
  static entry_file: string = "src/index.tsx";
  static html_template: string = "public/index.html";
  static ts_config: string = "configs/tsconfig.json";
  static output_dir: string = "build";
  static bundlename: string = "[name].[contenthash].bundle.js";

  static mode: "development" = "development";
  static devtool: string = "eval-cheap-source-map";
  static extensions: string[] = [".ts", ".tsx", ".js", ".json"];
}

const config: webpack.Configuration = {
  mode: Settings.mode,
  devtool: Settings.devtool,

  stats: {
    colors: true,
  },

  devServer: {
    contentBase: path.join(__dirname, Settings.output_dir),
    historyApiFallback: true,
    clientLogLevel: "silent",
    port: 3000,
    hot: true,
  },

  output: {
    filename: Settings.bundlename,
    path: path.resolve(__dirname, Settings.output_dir),
  },

  resolve: {
    extensions: Settings.extensions,
  },

  entry: {
    index: path.resolve(__dirname, Settings.entry_file),
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: Settings.html_template,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, Settings.ts_config),
      },
    }),
  ],

  optimization: {
    minimizer: [new TerserPlugin()],
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
};

export default config;
