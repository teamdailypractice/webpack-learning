const path = require("path")

module.exports = {
    mode: "development",
    entry: ['./src/entry', './src/index'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    }
}
