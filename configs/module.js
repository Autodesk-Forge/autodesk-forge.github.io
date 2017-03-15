var path =require ('path') ;
var extractTextPlugin =require ('extract-text-webpack-plugin') ;

module.exports ={
	rules: [
		{
			test: /\.css$/,
			use: extractTextPlugin.extract ({
				fallback: 'style-loader',
				use: 'css-loader!autoprefixer-loader',
				publicPath: './'
			}),
			include: [
				path.resolve (__dirname, '../src'),
				path.resolve (__dirname, '../node_modules/owl.carousel')
			]
		},
		{
			test: /\.js$/,
			use: 'babel-loader',
			include: [
				path.resolve (__dirname, '../src')
			]
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					js: 'babel-loader!eslint-loader'
				}
			},
			include: [
				path.resolve (__dirname, '../src')
			]
		},
		{
			test: /\.(ico|png|jpe?g|gif)(\?\S*)?$/,
			loader: 'url-loader',
			query: {
				name: '[name].[ext]?[hash]',
				limit: '1000'
			},
			include: [
				path.resolve (__dirname, '../src'),
				path.resolve (__dirname, '../node_modules/owl.carousel')
			]
		},
		{
			test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader',
			query: {
				//name: '[path][name].[ext]?[hash]',
				name: '[name].[ext]?[hash]',
				limit: '1000' // if url() and external issue with path
			},
			include: [
				path.resolve (__dirname, '../src')
			]
		},
		{
			test: /\.(json)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'json-loader',
			query: {
				name: '[name].[ext]?[hash]',
				limit: '1000'
			},
			include: [
				path.resolve (__dirname, '../src')
			]
		},
	]
} ;
