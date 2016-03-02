"use strict";
const path = require('path');

module.exports = {
	entry: {
		app: './app/app.js'
	},
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: ["babel-loader"],
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},

}