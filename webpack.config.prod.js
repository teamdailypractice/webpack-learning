const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge")
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: ['./src/index'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-output.js"
    },
    module: {
        plugins: [
            new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
        ],
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'image-loader'
                ]
            }
        ]
    }
}
