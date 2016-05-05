 
var Content=React.createClass({ 
	componentDidMount:function(){ 
		new grid3D( document.getElementById( 'grid3d' ) );
	},
	render:function(){  
		return (
			 <div className="container">
				<div className="row">
					<div className="col-md-12">
						<section className="grid3d vertical" id="grid3d">
							<div className="grid-wrap">
								<div className="grid">
									{
										this.props.data.map(function(item,key){
											return <figure key={key}>	<ArticleListItem  data={item}/> </figure>
										})
									}
								</div>
							</div> 
							<div className="content">
								{
									this.props.data.map(function(item,key){
										return <div className="content_box"  key={key}>  
													 <p className="dummy-text">{item.desc}</p>
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 
													 <p className="dummy-text">{item.desc}</p> 

											   </div>
									})
								}

								<div className="content_box">
									<div className="dummy-img"></div>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
								</div>
								<div className="content_box">
									<div className="dummy-img"></div>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
								</div> 
								<div className="content_box">
									<div className="dummy-img"></div>
									<p>这也行吗？？？？？这也行吗？？？？？这也行吗？？？？？这也行吗？？？？？这也行吗？？？？？这也行吗？？？？？这也行吗？？？？？</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
									<p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
								</div>

								<span className="loading"></span>
								<span className="icon close-content close">×</span> 
							</div>
						</section>
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
					{
						/**<div className="col-md-4">
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
					</div>**/
					}
				</div> 
			</div>
		);
	}
});


var ArticleList=React.createClass({ 
	render:function(){
		return (  
			
			<div className="article-list" id="list"> 
				<p>++++++++++++++++++++++++++++++++++++++++++++++++++++++</p> 
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
		var item='';
		if (this.props.data) {
			item=this.props.data;
		};
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
						<a href="javascript:;">{item.title}</a>
					</h1>
					<div className="post-meta">
						<span className="author">
							作者：
							<a href="###">mvoecss</a>
						</span>
						•
						<time title={item.time}  className="post-date">{item.time}</time>
					</div>
				</div>
				<div className="post-content">
					<p>
						{item.desc}
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