const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            // loading css
            // npm install --save-dev style-loader css-loader
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // loading resource
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // loading fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // loading data
            // npm install --save-dev csv-loader xml-loader
            // json 형태로 반환됩니다.
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    }
};