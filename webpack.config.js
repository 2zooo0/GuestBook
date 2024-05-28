const path =require('path');

module.exports = {
    mode: "development",
    entry:"./index.js",
    output: {
        path:path.resolve(__dirname, "bundleBuild"),
        filename : 'build.js'
    },

    module: {
        rules:[
            {
                test : /W.js$/,
                exclude:/node_modules/,
                use : "babel-loader"
            },
            {
                test : /W.css$/,
                use : ["style-loader", "css-loader"]
            }
        ],
    },
}