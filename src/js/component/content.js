 

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

		 
		$.get("./js/m.json",function(res){  console.log(res);
		});  
			

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
					 
					grid._init(); //重新刷新  渲染后的DOM 结构数据
				} 
			});
		}, 500); 
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
											return <figure key={key} data-key={key}>	<ArticleListItem  data={item}/> </figure>
										})
									}
								</div>
							</div> 
							<div className="content"> 
								{
									this.state.data.map(function(item,key){
										return <div className="content_box"  key={key}> 
													<div className="artc_info">
													 	<h1>{item.title}</h1>
														<p className="dummy-text">{item.desc}</p>
														<div class="info">
															<div class="line">
																<span class="author vcard item">
																	<a class="value url fn" href="###" rel="author">movecss</a>
																	发布在
																</span>
																<span class="item">2016年1月2日 23:42:23</span>
																<span class="item">
																	<span class="index">view：</span>
																	<span class="value">1445</span>
																</span>
																<span class="item" >JavaScript</span>
																<span class="item" >React</span>
															</div>
														</div>
														<div class="body_con">
															<div property="content:encoded" class="field-item even">
																<p>
																	图标字体的使用在慢慢减少。最近很多人找出了
																	<a href="https://speakerdeck.com/ninjanails/death-to-icon-fonts" target="_blank">不要使用字体图标的理由</a>
																	，并劝大家使用SVG图像。在《金融时报》（注：作者是一名《金融时报》的前端工程师），我们一致认为，总的来说，是时候探索作出一些转变了。
																</p>

																<p>
																	<a href="http://caniuse.com/#feat=svg" target="_blank">SVG的浏览器支持很好</a>
																	；超过94%的浏览器完全兼容SVG 1.1规范，如果你不需要使用
																	<code>mask</code>
																	的话，这个比例可以提高到96%。
																</p>

																<p>
																	根据具体情况，你可以权衡一下，是否为剩下的4%的浏览器提供降级，但是要考虑到对于你的网站访客来说，能看到图标是非常重要的。关于糟糕的用户体验的讨论，很多网站都依赖于使用图标来导航、切换重要的菜单、关闭提示或执行重要的操作日志等。
																</p>

																<p>
																	<img title="SVG图标非常方便，但降级并不容易" alt="SVG图标非常方便，但降级并不容易" src="http://cdn1.w3cplus.com/cdn/farfuture/slJxyoAguvk8MdhBUPBZELza5tgLAObTaCkjRDXSQrY/mtime:1451480682/sites/default/files/blogs/2015/1512/icon-usage.png" /></p>

																<p> <em>在空间受限的地方，经常会使用图标。用户必须依靠这些来执行关键操作。</em>
																</p>

																<p>
																	《金融时报》的图标集是
																	<a href="http://origami.ft.com/" target="_blank">Origami</a>
																	的一部分&mdash;&mdash;《金融时报》的品牌标志，以及Web开发工具&mdash;&mdash;必须支持公司的广泛使用，而且使用简单并提供可靠的、健壮的支持。因为《金融时报》有非常多的用户量，所以针对这4%的不支持SVG的降级就尤为重要。
																</p>

																<p>事实证明，降级做起来并没有想象中那么容易。</p>

																<h2>模板</h2>

																<p>
																	实现SVG图标有很多种方法&mdash;&mdash;
																	<a href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/" target="_blank">内联元素</a>
																	，图像或背景图像。因为需要提供一个坚实的降级，所以选择如下：
																</p>

																<ul>
																	<li>
																		内联
																		<code>&lt;svg&gt;</code>
																		元素的降级太复杂。一个普通的
																		<code>&lt;img&gt;</code>
																		元素需要依赖
																		<code>srcset</code>
																		，IE/Opera Mini/旧版安卓系统的浏览器不支持。这样每个图标的降级都需要一次单独的请求。✘
																	</li>
																	<li>背景图像从2000年初就在使用了，用来实现sprite和升级字体图标的项目，这样可以不需要全盘改写代码。✓</li>
																</ul>

																<p>
																	旧版基于图标的网页字体是根据符号需要，通过添加一个基本
																	<code></code>
																	和变量
																	<code></code>
																	来实现。作为字体它将继承父元素的颜色和尺寸。基于sprite的背景图像方法不能继承，所以需要额外定义其颜色和尺寸：
																</p>

																<h2>Sprite表</h2>

																<p>
																	降级图像非常重要，使用
																	<a href="https://css-tricks.com/svg-fragment-identifiers-work/" target="_blank">SVG片段标识符</a>
																	不是一个选择。我需要给每个图标一个常规的、不重叠的布局，就像我们在
																	<a href="http://alistapart.com/article/sprites" target="_blank">2004</a>
																	年做的那样。
																</p>

																<p>
																	每个我试过的SVG sprite工具可以输出一个sprite表，统一颜色，无论是从源逐字复制，还是引入一个设置来覆盖它。我真的很想避免针对
																	<code>20+</code>
																	个调色板，每种颜色都生成一个单独的文件，所以我们必须推出自己的系统。
																</p>

																<p>
																	在《金融时报》我们有很多符号和前面提到的大调色板，所以我们认为强制每个网站用户都下载一个大sprite sheet是不公平的，如果这个产品只使用几个图标。我写了一个小应用程序，可以生成一张sprite sheet，只包含请求的符号和颜色。
																</p>

																<p>
																	这个应用程序是通过提取源SVG文件的路径，进行一些优化，然后把它们作为定义包含在输出文件中。每个定义都有一个viewBox计算，这样它们占据的空间是相等的。定义对它们的产品本身不可见，所以程序遍历请求的颜色，引用每条路径，然后应用正确的填充。
																</p>

																<p>
																	<img title="SVG图标非常方便，但降级并不容易" alt="SVG图标非常方便，但降级并不容易" src="http://cdn1.w3cplus.com/cdn/farfuture/qhR6jnFp4cX973mwv0GYlxScN5jqLHaFluwm9LoTxHk/mtime:1451480682/sites/default/files/blogs/2015/1512/generator.png" /></p>

																<p> <em>SVG sprite生成器把路径输出到单独的源SVG文件，优化并计算viewBox，以使它们占据相等的空间。程序遍历请求的颜色和引用每条路径，并应用填充。</em> 
																</p>

																<p>
																	现在我们只使用系统来生成静态文件&mdash;&mdash;包括SVG和PNG&mdash;&mdash;但是我们日后可能实现一些类似的，如即时sprite sheet生成，如果我们看到这方面的需求。
																</p>

																<h2>样式</h2>

																<p>
																	这是最初的Sass代码。你可能会有点疑惑，我后面再解释。颜色和符号都被包含字sprite sheet中，连同显示的尺寸变量。
																</p>

																<blockquote>
																	<p>实例都是使用Sass来编写的，为了更清楚地展示所需的计算，已经调整为清晰可观看的状态。</p>
																</blockquote>

																<p>
																	我没有使用sprite sheet作为
																	<code>.icon</code>
																	元素的背景图像可能有点奇怪，而是增加伪元素的复杂性。这是因为sprite sheet使用从左到右带颜色的坐标轴，而符号是从上到下，而
																	<code>background-position</code>
																	不能单独指定一个坐标轴。
																</p>

																<p>
																	单独使用背景定位需要为每一个图标+颜色组合定义单独的样式&mdash;&mdash;这是一个额外的针对《金融时报》的50个符号和20种颜色的1000条声明。
																</p>

																<p>
																	对伪元素使用绝对定位，在所有浏览器中都是可以工作的。而
																	<code>left</code>
																	和
																	<code>right</code>
																	属性可以指定单独的类名；
																	<code>icon--colour</code>
																	对于水平轴，
																	<code>.icon--symbol</code>
																	对于垂直方向。
																</p>

																<blockquote>
																	<p>
																		<code>background-position-x</code>
																		和
																		<code>background-position-y</code>
																		属性在浏览器中同样是支持的，但是它们目前不是CSS规范的一部分，所以没有普遍实现。属性已经提出在CSS 4的
																		<code>background</code>
																		和
																		<code>border</code>
																		模块中加入。
																	</p>
																</blockquote>

																<p>
																	如果应用背景图像是可行的，但仍然需要进行缩放，这样每个图标才可以填充容器元素，而不管其本身的大小。sprite sheet分为常规、同样大小的正方形。sprite sheet中的颜色和符号数量都了解了所以缩放是可计算的&mdash;&mdash;一般是
																	<code>100%（元素的宽）x 颜色/符号的数量</code>
																	。然而，不是使用这些值来设置
																	<code>background-size</code>
																	，它们用来设置伪元素的大小，这样sprite sheet可以设置为合适的尺寸。
																</p>

																<p>
																	<img title="SVG图标非常方便，但降级并不容易" alt="SVG图标非常方便，但降级并不容易" src="http://cdn1.w3cplus.com/cdn/farfuture/1rSYifFa7f2ItdXph0pjVvAChCX8hqk4hL6fTlMAQQU/mtime:1451480683/sites/default/files/blogs/2015/1512/implementation-detail.png" /></p>

																<p>
																	<em>sprite sheet分为常规，相同尺寸的正方形，sprite sheet中颜色和符号的数量已知，这样才可以计算缩放。</em>
																</p>

																<p>
																	所以，设置部分完成了，但对于自身不是非常有用。需要Class来指定大小、颜色、要展示的符号。这些参数定义在列表中，可以被遍历来自动生成每个声明：
																</p>

																<p>
																	对于支持SVG的浏览器，到这里就完成了！你可以查看
																	<a href="http://codepen.io/anon/pen/dGPqmw" target="_blank">codepen上的demo</a>
																	。
																</p>

																<p>现在麻烦的部分到了....</p>

																<h2>降级</h2>

																<p>
																	不支持SVG的浏览器大致可以分为两组：旧IE（&lt;IE 9），以及安卓旧浏览器。所有这些浏览器都需要一个栅格图像降级，这可不是简单地指定两个背景图像，它们必须阻止下载以及尝试应用SVG文件。
																</p>

																<p>
																	这是通过
																	<a href="http://pauginer.com/post/36614680636/invisible-gradient-technique" target="_blank">不可见的渐变</a>
																	方法来代替SVG支持实现的。它并不完美（IE9和Android 3的旧浏览器不支持SVG，会被淘汰的），但也算好的了：
																</p>

																<p>旧的Android浏览器工作没问题，是时候解决旧版IE和其它不支持CSS3背景选项的浏览器的问题了。</p>

																<p>
																	选择一&mdash;&mdash;颜色&mdash;&mdash;为每个尺寸变量提供一个单独的sprite sheet。可以提前生成或根据需求提供sprite sheet，通过一个图像服务，但这种技术也意味着额外的请求，也会出现问题，只针对需要它的浏览器。这个选择只有在你愿意忍受这些缺点的时候才是可行的。
																</p>

																<p>
																	在旧版IE中有ActiveX过滤器，
																	<code>AlphaImageLoader</code>
																	有一个
																	<code>sizingMethod</code>
																	选项，可以用来模拟
																	<code>background-size: 100% 100%</code>
																	。不幸的是过滤器不能应用在伪元素上，如此古怪，所以hack这时候也没用了。
																</p>

																<p>
																	我使用另一个非标准的属性解决了这个问题，
																	<code>zoom</code>
																	。因为
																	<code>icon</code>
																	元素必须给定尺寸，sprite sheet才可以按照已知的尺寸和比率生成。这意味着
																	<code>icon</code>
																	元素不能给定一个相对尺寸，但是我想这是对周围工作的一个小警告。
																</p>

																<p>有点麻烦的是，元素的绝对定位必须按照sprite sheet的原生尺寸重新计算，这些属性也会被放大。</p>

																<blockquote>
																	<p>
																		<code>zoom</code>
																		可能不是CSS规范的一部分但是它已经实现得相当广泛了。最新版本的Chrome中的降级和IE8中的一样。
																	</p>
																</blockquote>

																<p>
																	每个降级属性都被重写，通过包装在媒体查询中的降级。带有
																	<a href="http://caniuse.com/#feat=css-mediaqueries,background-img-opts" target="_blank">CSS3背景选项的媒体查询</a>
																	的支持是非常安全的。
																</p>

																<h2>总结</h2>

																<p>
																	我想你们大多数人不会面临像《金融时报》的Origami团队这样的需求。如果你不需要一个非SVG的降级，或你的图标尺寸都是单独的，那么SVG sprite是最直接的实现图标字体的方法。但是，考虑到如此严格的要求，我们已经推出了
																	<a href="https://github.com/Financial-Times/o-ft-icons/tree/v4.0.0-beta.1" target="_blank">beta实现</a>
																	，希望收集尽可能多的反馈，我也会适时地在这里更新。我想回答的问题是：
																</p>

																<ul>
																	<li>它会比提供一个高分辨率的PNG更高效吗？</li>
																	<li>在一个页面上使用很多SVG图标是否会有性能问题？</li>
																	<li>字体图标的缺点是否大于实现SVG图标的复杂度（包括适当的降级）？</li>
																</ul>

															</div>
														</div>  
													</div>
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
	var arr = str.split(/[- :]/);
	var time=new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]); 
	//var time=new Date(str);
	//console.log(str,time.getDate());
	var str={}; //alert(time);
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