import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  devtool: "source-map",
  entry: "./src/index.ts",
  experiments: {
    outputModule: true
  },
  externals: {
    "crypto": "crypto",
    "elliptic": "elliptic",
    "http": "http",
    "https": "https",
    "node-fetch": "node-fetch",
    "sha256": "sha256",
    "url": "url"
  },
  mode: "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  optimization: {
    minimize: true
  },
  output: {
    clean: false,
    filename: "index.js",
    libraryTarget: "module",
    module: true,
    path: path.resolve(__dirname, 'lib')
  },
  resolve: {
    extensions: [
      ".ts",
      ".js"
    ]
  },
  target: "node"
};
