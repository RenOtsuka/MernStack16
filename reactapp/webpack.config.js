let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'),

//api/params
config = {
    output: {
        path: path.join(__dirname, '/dist'), //dist - distribution
        filename: 'index.bundle.js' //bundled file of app
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9090, //picks what port number to use for webpack to listen (default 9090)
        // proxy: {
        //     '/about/*': 'http://localhost:9000',
        //   },
        // open: {
        //     target: ['index.html']},
        historyApiFallback : true  //acts as a wildcard to catch any other endpoints       //localhost:9092/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //checks files with .js/.jsx extension in /src
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader' //uses config from .babelrc
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })] //loads the html
}

module.exports = config;