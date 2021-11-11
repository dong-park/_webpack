const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        print: './src/print.js',
        another: './src/another-module.js'
    },

    devtool: "inline-source-map", // 번들링되서 묶기기전 코드로 에러시 소스를 안내해준다.

    // npm install --save-dev webpack-dev-server
    // 개발서버 제공 (watch) 와 같음
    devServer: {
        static: "./dist",
    },

    // npm install --save-dev html-webpack-plugin
    // html 파일 포함 dist 파일을 완성해준다.
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],

    output: {
        filename: '[name].bundle.js', // 각 엔트리에서 지정한 이름.bundle.js 로 번들링됨
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 빌드 실행하기전 찌꺼기, 잔여파일을 삭제후 진행

        // npm install --save-dev express webpack-dev-middleware
        // express 서버 사용할때 메인루트에 server.js로 webpack-dev-middleware를 호출
        publicPath: "/"
    },

    // 엔트리 청크 사이에 중복된 모듈이 있는지 체크하고 모두 포함되는 경우 개별 모듈 스크립트로 분할한다.
    optimization: {
        splitChunks: {
            chunks: "all"
        }
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