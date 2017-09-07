const path = require('path');

module.exports = {
	entry: 'src/app4/app4.js',
	output: {
		publicPath: '/dist/',
		filename: 'child-application2.js',
		path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
	],
	devtool: 'source-map',
	externals: [
	],
};
