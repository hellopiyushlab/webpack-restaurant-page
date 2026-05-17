import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';

export default {
    mode: "development",

    entry: "./src/index.js",
    
    output: {
        filename: "bundle.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },

    plugins: [
        // to generate an html file as well
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html",
                filename: "index.html",
            }
        ),
    ],

    module: {
        rules: [
            // use html loader if you come across .html file
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
}