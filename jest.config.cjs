module.exports = {
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/**/*.test.ts",
    "!src/**/*.spec.ts"
  ],
  "coverageDirectory": "coverage",
  "coverageReporters": [
    "text",
    "text-summary",
    "html",
    "lcov"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true
      }
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "preset": "ts-jest",
  "rootDir": ".",
  "roots": [
    "<rootDir>"
  ],
  "testEnvironment": "node",
  "testMatch": [
    "**/__tests__/**/*.ts",
    "**/?(*.)+(spec|test).ts"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "<rootDir>/lib/"
  ],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "verbose": true
};