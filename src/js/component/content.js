 
var Content=React.createClass({
	render:function(){
		return (
			 <div className="container">
				<div className="row">
					<div className="col-md-8">
						<ArticleList />
						<div className="pagination_box">
							<nav>
								<ul className="pagination">
									<li>
										<a href="#" aria-label="Previous">
											<span aria-hidden="true">&laquo;</span>
										</a>
									</li>
									<li>
										<a href="#">1</a>
									</li>
									<li>
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
									<li>
										<a href="#">4</a>
									</li>
									<li>
										<a href="#">5</a>
									</li>
									<li>
										<a href="#" aria-label="Next">
											<span aria-hidden="true">&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>
						</div> 
					</div>
					<div className="col-md-4">
						<div className="col-md-12">
							<div className="widget">
								<h4 className="title">热门</h4>
								<ul className="list-group tags">
									<li className="list-group-item"><span className="badge">14</span>Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Morbi leo risus</li>
									<li className="list-group-item">Porta ac consectetur ac</li>
									<li className="list-group-item">Vestibulum at eros</li>
								</ul>
							</div>
						</div> 
						<div className="col-md-12">
							<div className="widget">
								<h4 className="title">标签云</h4>
								<div className="tag-cloud">
									<a href="###">Laravel 5.2</a>
									<a href="###">Spark</a>
									<a href="###">镜像</a>
									<a href="###">新版本发布</a>
									<a href="###">LTS</a>
									<a href="###">微框架</a>
									<a href="###">Lumen</a>
									<a href="###">命名空间</a>
									<a href="###">Laravel4</a>
									<a href="###">Whoops</a>
									<a href="###">Event</a>
									<a href="###">升级</a>
									<a href="###">laravle5</a>
									<a href="###">错误页</a>
									<a href="###">Laravel 5</a>
									<a href="###">Artisan</a>
									<a href="###">Laravel 5.1</a>
									<a href="###">Lravel</a>
									<a href="###">...</a>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div>
		);
	}
});


var ArticleList=React.createClass({ 
	render:function(){
		return (  
			
			<div className="article-list" id="list">  
				<ArticleListItem></ArticleListItem>
				<ArticleListItem></ArticleListItem>
				<ArticleListItem></ArticleListItem>
				<ArticleListItem></ArticleListItem>
				<ArticleListItem></ArticleListItem> 
			</div> 
		);
	}
});

var ArticleListItem = React.createClass({
	articleCLick:function(val,e){ 
		console.log(val,e.target);
	},
	render: function() {
		return (
			<article className="post" onClick={this.articleCLick.bind(this,12001)}>
				<div className="post-head-fixed">
					<div className="month">
						<span>MAR</span>
						<b>7</b>
					</div>
					<div className="date_chinese">
						4月18日
					</div>
				</div>
				<div className="post-head">
					<h1 className="post-title">
						<a href="###">Laravel 5.2 正式发布</a>
					</h1>
					<div className="post-meta">
						<span className="author">
							作者：
							<a href="###">mvoecss</a>
						</span>
						•
						<time title="2015年12月22日星期二凌晨3点58分" datetime="2015年12月22日星期二凌晨3点58分" className="post-date">2016年5月3日 15:47:37</time>
					</div>
				</div>
				<div className="post-content">
					<p>
						Laravel 5.2 正式版刚刚发布了，前边我们已经发过一篇文章列举了新版本带来的新特性，有兴趣的同学可以再去看一下：Laravel 5.2 要发布了，来看看都有哪些新特性吧 。 话不多说，还是直接 composer install 并看文档吧！
					</p>
				</div>
				<div className="post-permalink">
					<a className="btn btn-default" href="###">阅读全文</a>
				</div>

				<footer className="post-footer clearfix">
					<div className="pull-left tag-list"> <i className="fa fa-folder-open-o"></i>
						<a href="###">新版本发布</a>
						,
						<a href="###">Laravel 5.2</a>
					</div>
					<div className="pull-right share"></div>
				</footer>
			</article>
		)
	}
});

module.exports=Content;