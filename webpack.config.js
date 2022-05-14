const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge")
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
// const {css} = require("./src/styles/styles.css");

module.exports = {
    mode: "development",
    entry: ['./src/index'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-output.js"
    },
    plugins: [
        new MiniHtmlWebpackPlugin(
            {
                // Optional, defaults to `index.html`
                filename: 'demo.html',

                context: {
                    title: 'Webpack demo',
                    // Optional, defaults to `{ lang: 'en' }`
                    htmlAttributes: {
                        lang: 'en'
                    },
                    head: [`<link rel="stylesheet" href="styles/styles.css">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">`]
                },

            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.(jp?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    outputPath: 'images',
                    regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.jp?g$/i,
                    name: '[name].[ext]',
                },

            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

        ]
    }
}
