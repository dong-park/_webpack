const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },

    //npm install --save-dev html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],

    output: {
        filename: '[name].bundle.js', // 각 엔트리에서 지정한 이름.bundle.js 로 번들링됨
        path: path.resolve(__dirname, 'dist'),
        clean: true // 빌드 실행하기전 찌꺼기, 잔여파일을 삭제후 진행
    },

    module: {
        rules: [
            // // loading css
            // // npm install --save-dev style-loader css-loader
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // // loading resource
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: "asset/resource",
            // },
            // // loading fonts
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
            // // loading data
            // // npm install --save-dev csv-loader xml-loader
            // // json 형태로 반환됩니다.
            // {
            //     test: /\.(csv|tsv)$/i,
            //     use: ['csv-loader'],
            // },
            // {
            //     test: /\.xml$/i,
            //     use: ['xml-loader'],
            // },
            // // etc resource parser
            // // npm install toml yamljs json5 --save-dev
            // {
            //     test: /\.toml$/i,
            //     type: 'json',
            //     parser: {
            //         parse: toml.parse,
            //     },
            // },
            // {
            //     test: /\.yaml$/i,
            //     type: 'json',
            //     parser: {
            //         parse: yaml.parse,
            //     },
            // },
            // {
            //     test: /\.json5$/i,
            //     type: 'json',
            //     parser: {
            //         parse: json5.parse,
            //     },
            // },
        ],
    }
};