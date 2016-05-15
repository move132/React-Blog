var webpack = require('webpack');
var path = require('path'); 
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var actionFile = require('./src/bin/actionFile');

console.log("==========================================="); 
console.log(process.env.npm_config_argv);  
console.log("===========================================");
var getPath = function(url) {
    return path.resolve(__dirname, url);
};
/*var isPackMusic=function(path){
    var outputDir = "build";
    actionFile.mkdirSync(getPath(outputDir));  //创建目录
    actionFile.mkdirSync(getPath(outputDir + '/testmusic/'));
    actionFile.loopFile(path, function(FilePath) { 
        var fileType = FilePath.split('.').pop().toLowerCase();
        var fileName = FilePath.split('/').pop().replace(/\.\w+$/, '');

        if (fileType === 'mp3') {
            var data=fs.readFileSync(FilePath,"utf-8");
            var getMusicPath = getPath(outputDir + '/testmusic/'+fileName+'.mp3');
            fs.writeFileSync(getMusicPath,data);
        } 
    });  
}
var pageParam= process.env.NODE_ENV;
if (pageParam === "release") {  //是否打包音乐文件
    isPackMusic("src/");
};*/
 
module.exports = {
  entry: {
    index:path.resolve(__dirname, './src/js/app.js'),
    effecfn:path.resolve(__dirname, './src/js/effecfn_common.js'),
  },
  output: {  
    //publicPath: "http://127.0.0.1:9090/static/dist/", 
    path:getPath('build'),
    filename: "js/[name]_build.js", 
    publicPath: '../' 
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }, 
      { test: /\.scss$/, loader:  ExtractTextPlugin.extract("style", "!css!sass?outputStyle=expanded")},  
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
      { test: /\.json$/, loader: 'file?name=js/[name].[ext]' }, 
      { test: /\.woff|\.woff2|\.svg|.eot|.otf|\.ttf/, loader : 'url?name=/fonts/[name].[ext]&prefix=font/&limit=10000'},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?name=images/[name].[hash:8].[ext]&limit=92'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  // 表示这个依赖项是外部lib，遇到require它不需要编译，
  // 且在浏览器端对应window.React
  /*externals: [{ //页面需要引入<script src="xx.js"></script>
      jQuery: 'jquery',
      $: 'jquery'
  }],*/
  //devtool:"eval",
  cache:true,
  plugins: [
  /*  new webpack.optimize.UglifyJsPlugin({ //开启压缩
        compress: {
            warnings: false
        } 
    }), */ 
	// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
    new webpack.optimize.DedupePlugin(),
    // 按引用频度来排序 ID，以便达到减少文件大小的效果
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.ProvidePlugin({   //不用直接require('文件')  全局变量别名 配合 resolve:{}使用
        React: 'react',
        ReactDOM: 'react-dom',  
        $: 'jquery', 
        jQuery: "jquery"
    }), 
    //将公共代码抽离出来合并为一个文件 
    //new webpack.optimize.CommonsChunkPlugin('./js/common.js'), 
    new HtmlWebpackPlugin({           //根据模板插入css/js等生成最终HTML 
        filename:'/index.html',   
        template:'./src/index.html', // 模板路径 
        inject:false,  //允许插件修改包括head与body
        hash:true,  
        minify:{  //压缩HTML文件
          removeComments:true,  //移除 注释
          //collapseWhitespace:true //删除空白符与换行符
        }
    })
  ],
  resolve: {
      // root: './', //绝对路径
      extensions: ['', '.js','.jsx', '.json', '.less','.scss', '.css', "jpg"," gif", "jpeg", "png", 'bmp'], 
      modulesDirectories:[
        'src',
        'node_modules',
      ], 
      alias: {  //
        bootstrapCss:path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.min.css"),  
        /*jquery :path.join(__dirname, "node_modules/jquery/dist/jquery.min.js"),
        bootstrap:path.join(__dirname, "node_modules/bootstrap/dist/js/bootstrap.min.js"), 
    
        modernizr:path.join(__dirname, "src/js/effecfn/modernizr.custom.js"),*/

        
    } 
  }
};
