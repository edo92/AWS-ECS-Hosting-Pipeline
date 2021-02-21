module.exports = {
  roots: ["../__tests__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jest-environment-node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  // Setup Enzyme
};
