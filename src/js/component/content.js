 

var cleaTime,grid;
var Content=React.createClass({ 
	getInitialState:function(){
		return {
			data:this.props.data
		};
	},
	componentDidMount:function(){  
		grid=new grid3D( document.getElementById( 'grid3d' ),{name:'初始化！！'} );
	},
	getMoreData:function(e){
		var _this=this;  
		if (e.target.nodeName.toLowerCase() != 'p') {
			return;
		};

		e.target.className='ac'; 
		e.target.innerText='';  
		e.persist();  //保持EVENT对象到缓存		
		console.log(e.target);



		clearTimeout(cleaTime); 
		cleaTime=setTimeout(function(){
			$.ajax({
				url: './js/moive.json',  
				type: 'get',
				dataType: 'json', 
				data:{pageNum:2},
				success: function(data) {
					window.pageNum++;   
					console.log(window.pageNum);
					var olddata=_this.state.data;  

					// console.log(data.splice(window.pageNum*10-1,10).length);
					if (data.splice(window.pageNum*10-1,10).length == 0) {
						e.target.className=''; 
						e.target.innerText='抱歉，没有数据了';
 						return;
 					};  
					var newData=olddata.concat(data.splice(window.pageNum*10-1,10));


					e.target.className=''; 
					e.target.innerText='查看更多';  

					_this.setState({
						data:newData
					});  
					 
					 grid._init();
					//grid=new grid3D( document.getElementById( 'grid3d' ) ,{name:'追加！！！'});
				} 
			});
		}, 2000); 
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
										this.state.data.map(function(item,key){
											return <figure key={key}>	<ArticleListItem  data={item}/> </figure>
										})
									}
								</div>
							</div> 
							<div className="content">
								{
									this.state.data.map(function(item,key){
										return <div className="content_box"  key={key}> 
													 <h1>{item.title}</h1>
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
								<span className="loading"></span>
								<span className="icon close-content close">×</span> 
							</div>
						</section>
						<div className="more" onClick={this.getMoreData}>
							<p>查看更多</p>  
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

function setMonthStr(str){ 
	var time=new Date(str);
	//console.log(str,time.getDate());
	var str={};
	switch(time.getMonth()+1){
		case 1:
			str.month='Jan';
			str.day=time.getDate();
			break;
		case 2:
			str.month='Feb';
			str.day=time.getDate();
			break;
		case 3:
			str.month='Mar';
			str.day=time.getDate();
			break;
		case 4:
			str.month='Apr';
			str.day=time.getDate();
			break;
		case 5:
			str.month='May';
			str.day=time.getDate();
			break;
		case 6:
			str.month='Jun';
			str.day=time.getDate();
			break;
		case 7:
			str.month='Jul';
			str.day=time.getDate();
			break;
		case 8:
			str.month='Aug';
			str.day=time.getDate();
			break;
		case 9:
			str.month='Sep';
			str.day=time.getDate();
			break;
		case 10:
			str.month='Oct';
			str.day=time.getDate();
			break;
		case 11:
			str.month='Nov';
			str.day=time.getDate();
			break;
		case 12:
			str.month='Dec';
			str.day=time.getDate();
			break;
	} 
	return str;
} 

var ArticleListItem = React.createClass({
	articleCLick:function(val,e){ 
		//console.log(val,e.target);
	}, 
	render: function() {
		var item='';
		if (this.props.data) {
			item=this.props.data;
		};

		var tags='';
		if (item.tags) {
			tags=item.tags.map(function(item,key){
				return <a key={key} href="###">{item}</a>
			});
		};
		 
		return (
			<article className="post" onClick={this.articleCLick.bind(this,item.id)}>
				<div className="post-head-fixed">
					<div className="month">
						<span>{setMonthStr(item.time).month}</span>
						<b>{setMonthStr(item.time).day}</b>
					</div>
					{
						/** <div className="date_chinese">
								4月18日
							</div>
						 */
					}
				</div>
				<div className="post-head">
					<h1 className="post-title">
						<a href="javascript:;">{item.title}</a>
					</h1>
					<div className="post-meta">
						<span className="author">
							作者：mvoecss
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
				{
					/*<div className="post-permalink">
						<a className="btn btn-default" href="###">阅读全文</a>
					</div>*/
				}

				<footer className="post-footer clearfix">
					<div className="pull-left tag-list"> <i className="fa fa-folder-open-o"></i> 
						{ 
							tags
						}
					</div>
					<div className="pull-right share">

					</div>
				</footer>
			</article>
		)
	}
});

module.exports=Content;