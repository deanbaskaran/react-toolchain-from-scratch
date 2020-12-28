const path = require("path")

module.exports = {
	mode: "development",
	entry: "./src",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: "babel-loader"
		}]
	},
	devServer: {
		contentBase: "./public",
		port: 3000,
		open: true
	}
}