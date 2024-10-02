const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
  optimization: {
    minimize: false,
  },
  devtool: "source-map",
  externalsPresets: { node: true },
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
      allowlist: "common",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    filename: "app-a.js",
    path: path.resolve(__dirname, "../../dist/apps/app-a"),
  },
};
