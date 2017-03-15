var path =require ('path') ;
var webpack =require ('webpack') ;
var extractTextPlugin =require ('extract-text-webpack-plugin') ;
var htmlWebpackPlugin =require ('html-webpack-plugin') ;
var optimizeJsPlugin =require ('optimize-js-plugin') ;
var progressBarPlugin =require ('progress-bar-webpack-plugin') ;
var chalk =require ('chalk') ;

module.exports =[
	new webpack.LoaderOptionsPlugin ({
		debug: false
	}),
	new webpack.DefinePlugin ({
		'process.env': {
			NODE_ENV: JSON.stringify (process.env.NODE_ENV),
			WEBPACK: true
		}
	}),
	new webpack.optimize.OccurrenceOrderPlugin (),
	new webpack.optimize.UglifyJsPlugin ({
		compress: {
			conditionals: true,
			comparisons: true,
			screw_ie8: true,
			sequences: true,
			dead_code: true,
			if_return: true,
			join_vars: true,
			warnings: false,
			evaluate: false,
			unused: true
		},
		output: {
			comments: false
		}
	}),
	new optimizeJsPlugin ({
		sourceMap: false
	}),
	new extractTextPlugin ({
		filename: 'styles.css',
		allChunks: true
	}),
	new webpack.ProvidePlugin ({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'root.jQuery': 'jquery',
	}),
	new htmlWebpackPlugin({
		title: 'Autodesk Forge',
		template: path.resolve (__dirname, '../src/index-template.html'),
		filename: 'index.html',
		minify: {
			removeStyleLinkTypeAttributes: true,
			removeAttributeQuotes: true,
			collapseWhitespace: true,
			removeComments: true,
			minifyCSS: true
		},
		inject: 'body'
	}),
	new progressBarPlugin ({
		format: '  build [:bar] ' + chalk.green.bold (':percent') + ' (:elapsed seconds)',
		clear: false
	})
	//new webpack ()
]