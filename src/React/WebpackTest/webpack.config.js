const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[{
            test:/\.html$/,
            use:[
                {
                    loader:"html-loader",
                    options:{minimize:true}
                }
            ]
        },]
    },
    plugins:[
        new HTMLWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]
};
