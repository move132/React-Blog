 
require("bootstrapCss"); 
require("../css/comm.scss"); 
require("../css/component.css");

  

var Header=require("./component/header");
var Copyright=require("./component/copyright");
var Content=require("./component/content");



/*<div>
	<Header /> 
	<Content />
	<Copyright />
</div>*/

var Page=React.createClass({
	componentDidMount:function(){ 
		new grid3D( document.getElementById( 'grid3d' ) );

		$.ajax({
		 	url:'./js/moive.txt',
		 	type:'get',
		 	dataType:'text',async:false,
		 	success:function(data){
		 		var array=[];
		 		array=data.split("|");
		 	 
		 		var html="",list='';
		 		for (var i = 0; i < array.length; i++) {
		 			html+='<li class="list-group-item" data-toggle="tooltip" data-placement="top" title="'+array[i]+'"><a  href="###">'+array[i]+'</a></li>';

		 			//$("#list .articles").prepend(item_tpl.replace(/\{title\}/g,array[i]));
		 		};
		 		$(".tags").html(html);
		 		
		 	}
		 }); 

	},
	articleCLick:function(val,e){ 
		console.log(val,e.target);
	},
	render:function(){
		return (
			<div className="page"> 
				<div className="page-loading">

				</div>
				<div className="container">
					<section className="grid3d vertical" id="grid3d">
						<div className="grid-wrap">
							<div className="grid">
								<figure>
	 								<ArticleListItem />
								</figure>
								<figure>
									<ArticleListItem />
								</figure>
								<figure>
									<ArticleListItem />
								</figure>
							</div>
						</div> 
						<div className="content">
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
							<span className="loading"></span>
							<span className="icon close-content close">×</span> 
						</div>
					</section>
				</div>
				<Header /> 
				<Content />
				<Copyright />	 
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

ReactDOM.render(<Page />,document.getElementById("app")); 