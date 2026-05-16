import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); // get the name of the file
const __dirname = path.dirname(__filename); // get the name of the directory that file is in

export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // will add dist at the end
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                template: "./src/index.html",
                filename: 'index.html',
            }
        )
    ]
}