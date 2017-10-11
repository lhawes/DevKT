var webpack = require('webpack');

module.exports = {
	entry: [
		'./app/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	}
};
