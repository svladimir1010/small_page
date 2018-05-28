const path = require("path");
var $ = require("jquery");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			},
			{
				test: /vendor\/.+\.(jsx|js)$/,
				loader: "imports?jQuery=jquery,$=jquery,this=>window"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
		/*	new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })*/
	]
};
