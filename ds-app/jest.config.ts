import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom", // Use jsdom for browser-like testing
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Use babel-jest to transform TS/JS files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognized file extensions
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Setup file for jest-dom matchers
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore unnecessary paths
};

export default config;
