const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge")

module.exports = {
    mode: "development",
    entry: ['./src/index'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-output.js"
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'img-loader'
                ]
            }
        ]
    }
}
