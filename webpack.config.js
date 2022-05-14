const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: ['./src/entry', './src/index'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-output.js"
    }
}
