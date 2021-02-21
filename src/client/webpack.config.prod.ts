import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

class Settings {
  static entry_file: string = "./src/index.tsx";
  static html_template: string = "./public/index.html";
  static output_dir: string = "build";
  static extensions: string[] = [".ts", ".tsx", ".js", ".json"];
  static bundlename: string = "[name].[contenthash].bundle.js";
  static mode: "production" = "production";
  static stats: "errors-only" = "errors-only";
}

const config: webpack.Configuration = {
  mode: Settings.mode,
  stats: Settings.stats,

  entry: {
    index: path.resolve(__dirname, Settings.entry_file),
  },

  output: {
    filename: Settings.bundlename,
    path: path.resolve(__dirname, Settings.output_dir),
  },

  resolve: {
    extensions: Settings.extensions,
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, Settings.html_template),
    }),
  ],

  optimization: {
    minimize: true,
    moduleIds: "deterministic",
    runtimeChunk: "single", // share same code bewteen js files
    splitChunks: {
      name: "runtime",
      chunks: "all",
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
            plugins: [
              ["@babel/plugin-transform-runtime", { regenerator: true }],
            ],
          },
        },
      },
    ],
  },
};

export default config;
