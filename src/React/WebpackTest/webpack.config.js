const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js.$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
        ]
    },
    plugins:[
        new HTMLWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
};
