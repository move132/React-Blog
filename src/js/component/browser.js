

var html='<!--[if lt IE 8]>' +
				    '<div class="browser-warning" id="browser-warning">' +
				        '你的浏览器可能无法正常浏览本站，推荐使用 <a href="http://www.google.com/chrome" target="_blank" title="下载 Chrome 浏览器">Chrome</a>、' +
				        '<a href="http://www.apple.com/safari" target="_blank" title="下载 Safari 浏览器">Safari</a>、' +
				        '<a href="http://firefox.com.cn/download/" target="_blank" title="下载 Firefox 浏览器">Firefox</a> 等浏览器，或者升级您的' +
				        '<a href="http://windows.microsoft.com/zh-CN/internet-explorer/download-ie" target="_blank" title="下载最新版的 Internet Explorer">Internet Explorer</a><a href="javascript:void(0);" class="close-btn">&times;</a>' +
				    '</div>' +
			    '<![endif]-->';
var Browser=React.createClass({
	render:function(){
		return ( 
			<div dangerouslySetInnerHTML={{__html: html}} ></div>  
		);
	}
});

module.exports=Browser;   