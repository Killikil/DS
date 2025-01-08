import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Use ts-jest for TypeScript support
  testEnvironment: "jsdom", // Use jsdom for browser-like testing
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to transform TS files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Setup file for jest-dom matchers
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore unnecessary paths
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json", // Point to the TypeScript configuration
    },
  },
};

export default config;
