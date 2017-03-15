//var debug =process.env.NODE_ENV !== 'production' ; // development
//var path =require ('path') ;
//var webpack =require ('webpack') ;

var config =require ('./configs/' + process.env.NODE_ENV) ;

module.exports =config ;
