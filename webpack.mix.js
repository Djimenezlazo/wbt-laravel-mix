let mix = require('laravel-mix');
const CopyPlugin = require("copy-webpack-plugin");

mix.autoload({
jquery: ['$', 'jQuery', 'window.jQuery'],
});

mix.setPublicPath('dist')
.js('src/js/app.js', 'dist/js')
.sass('src/css/app.scss', 'dist/css')
.sourceMaps().options({
processCssUrls: false,
}).webpackConfig({
    plugins: [
        new CopyPlugin({
            patterns: [
            { from: "src/img", to: "img" },
            { from: "src/fonts", to: "fonts" },
            ],
        })
    ]
});