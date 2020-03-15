const path = require ('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const TemplateHtmlFile = require('./templateHtmlFile');


const config = {
    entry: './src/index.js',
    output: {
        filename: "build[hash].js",
        path: path.resolve(__dirname, './public'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/np"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: "index[hash].css",
            }),
        new CleanWebpackPlugin( {
        cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '.public/**/*')]
        }),
        ...TemplateHtmlFile,


    ],
devServer: {
        overlay:true,
            contentBase: path.resolve(__dirname, "./src/index.html"),
        index: 'index.html',
        part: 3333
}
};

module.exports = config;
