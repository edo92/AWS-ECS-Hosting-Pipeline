module.exports = {
  preset: "ts-jest",
  roots: ["../__tests__"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  globals: {
    "ts-jest": {
      babel: true,
      tsconfig: "./configs/tsconfig.jest.json",
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
