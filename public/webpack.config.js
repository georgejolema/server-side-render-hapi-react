const path = require('path');

const babelOptions = {
    presets: ['react', 'env']
};

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: { bundle: './client' },
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            include: [
                path.resolve(__dirname)
            ],
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: babelOptions
            }]
        },
        {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }]
    },
    resolve: {  
        extensions: ['.js', 'scss', 'css']
    }
};
