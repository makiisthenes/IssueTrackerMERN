// This is what we will when we want to tell webpack what to do. 
// Just add this as boilerplate code when you make a new webpage
const path = require('path');


// Config values;
let mode_config = "development";  // || "production"
let entry_config = {app: ["./src/Component.jsx"] }  // This is where all dependencies are generally called, making the app.


module.exports = {
	mode: mode_config,
	entry: entry_config,
	output: {
		filename: "[name].bundle.js",  // Filename to parse to.
		path: path.resolve(__dirname, 'public'),  // Find root directory path and then go to directory public. 
		publicPath: "/public/",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: 'all',
		},
	},
	devtool: "source-map"
}