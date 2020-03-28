const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    outputDir: '../../server/client_packages/ui/phone',
    publicPath: '',
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {from: '../assets/vehicles', to: 'assets/vehicles'}
            ]),
        ]
    },
    productionSourceMap: false,
    css: {
        extract: true
    }
};
