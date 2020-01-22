const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/app/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'dist/index.html'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/manifest.json'),
                to: path.resolve(__dirname, 'dist/manifest.json'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/worker.js'),
                to: path.resolve(__dirname, 'dist/worker.js'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist/favicon.ico'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/logo.png'),
                to: path.resolve(__dirname, 'dist/logo.png'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/logo192.png'),
                to: path.resolve(__dirname, 'dist/logo192.png'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/logo512.png'),
                to: path.resolve(__dirname, 'dist/logo512.png'),
            },
        ]),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/robots.txt'),
                to: path.resolve(__dirname, 'dist/robots.txt'),
            },
        ]),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.raw.svg$/i,
                use: 'svg-inline-loader',
            },
            {
                test: /\.(gif|png|jpe?g|(?<!raw.)svg|woff2?|ttf|otf|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
}
