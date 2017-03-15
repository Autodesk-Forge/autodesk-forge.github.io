
module.exports ={
	//noInfo: true,
	inline: true, // is already inline
	hot: true,

	//contentBase: path.resolve (__dirname, '../dist'),

	port: 3000,

	//overlay: true,
	// overlay: {
	// 	warnings: true,
	// 	errors: true
	// },

	stats: 'minimal', // 'errors-only',
	// stats: {
	// 	assets: true, // Add asset Information
	// 	assetsSort: 'field', // Sort assets by a field
	// 	cached: true, // Add information about cached (not built) modules
	// 	children: true, // Add children information
	// 	chunks: true, // Add chunk information (setting this to `false` allows for a less verbose output)
	// 	chunkModules: true, // Add built modules information to chunk information
	// 	chunkOrigins: true, // Add the origins of chunks and chunk merging info
	// 	chunksSort: 'field', // Sort the chunks by a field
	// 	context: '../src/', // Context directory for request shortening
	// 	colors: true, // `webpack --colors` equivalent
	// 	errors: true, // Add errors
	// 	errorDetails: true, // Add details to errors (like resolving log)
	// 	hash: true, // Add the hash of the compilation
	// 	modules: true, // Add built modules information
	// 	modulesSort: 'field', // Sort the modules by a field
	// 	publicPath: true, // Add public path information
	// 	reasons: true, // Add information about the reasons why modules are included
	// 	source: true, // Add the source code of modules
	// 	timings: true, // Add timing information
	// 	version: true, // Add webpack version information
	// 	warnings: true // Add warnings
	// }
} ;
