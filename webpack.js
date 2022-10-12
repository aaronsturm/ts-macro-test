const nodeExternals = require("webpack-node-externals");
const TsMacros = require("ts-macros").default;

module.exports = {
  mode: "none",
  target: "es2021",
  entry: "./src/index.ts",
  output: {
    filename: "./index.js",
    chunkFormat: "module",
  },
  module: {
    rules: [
      {
        use: [
          "ts-loader",
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: (program) => ({
                before: [TsMacros(program)],
              }),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [nodeExternals()],
};
