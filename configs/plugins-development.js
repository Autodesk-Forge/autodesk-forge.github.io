var path =require ('path') ;
var webpack =require ('webpack') ;
var extractTextPlugin =require ('extract-text-webpack-plugin') ;
var htmlWebpackPlugin =require ('html-webpack-plugin')
var progressBarPlugin =require ('progress-bar-webpack-plugin') ;
var chalk =require ('chalk') ;

module.exports =[
	new webpack.DefinePlugin ({
		'process.env': {
			NODE_ENV: JSON.stringify (process.env.NODE_ENV),
			WEBPACK: true
		}
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
	new htmlWebpackPlugin ({
		title: 'Autodesk Forge - DEV',
		template: path.resolve (__dirname, '../src/index-template.html'),
		filename: 'index.html',
		minify: false,
		inject: 'body'
	}),
	new progressBarPlugin ({
		format: '  build [:bar] ' + chalk.green.bold (':percent') + ' (:elapsed seconds)',
		clear: false
	})
	//new webpack ()
]