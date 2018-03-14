const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
    console.log("env", env);

    const plugins = [
        new ExtractTextPlugin("site.css"),
    ];

    const isProduction = env == "prod";
    if(isProduction){
        plugins.push(new UglifyJsPlugin());
    }

    const options = {
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.html/,
                    use: [ "html-loader" ]
                },
                {
                    test: /site\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {loader: 'css-loader', options: { minimize: isProduction }},
                            {loader: "sass-loader"}
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {loader: 'css-loader', options: { minimize: isProduction }},
                        {loader: "sass-loader"}
                    ],
                    exclude: [
                        /site\.scss$/,
                    ]
                },
            ]
        },
    };

    if(!isProduction) {
        options.devtool = 'source-map';
    }

    return options;
};
