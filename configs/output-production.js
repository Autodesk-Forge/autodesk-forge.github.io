var path =require ('path') ;

module.exports ={
	path: path.resolve (__dirname, '../dist/'),
	filename: '[name].bundle.js',
	publicPath: 'dist/'
} ;
