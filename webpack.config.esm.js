const path = require('path');

module.exports = {
  "devtool": "source-map",
  "entry": "./src/index.ts",
  "experiments": {
    "outputModule": true
  },
  "externals": {
    "crypto": "crypto",
    "elliptic": "elliptic",
    "http": "http",
    "https": "https",
    "node-fetch": "node-fetch",
    "sha256": "sha256",
    "url": "url"
  },
  "mode": "production",
  "module": {
    "rules": [
      {
        "exclude": "/node_modules/",
        "test": "/\\.ts$/",
        "use": "ts-loader"
      }
    ]
  },
  "optimization": {
    "minimize": true
  },
  "output": {
    "clean": false,
    "filename": "index.js",
    "libraryTarget": "module",
    "module": true,
    "path": "path.resolve(__dirname, 'lib')"
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ]
  },
  "target": "node"
};