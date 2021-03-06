 
require("bootstrapCss"); 
require("../css/comm.scss"); 
require("../css/component.css");  
 
require("bootstrap");  

var Header=require("./component/header");
var Copyright=require("./component/copyright");
var Content=require("./component/content");
var Browser=require("./component/browser")
var ScrollTop=require('./component/scrollTop');
var Mock=require('mockjs');
    
/*<div>
	<Header /> 
	<Content />
	<Copyright />
</div>*/  

var Page=React.createClass({
	scrollTotop:function(){
		var _top=$(window).scrollTop(); 
	 	if ( _top > 150) {
	 		$(".scroll").removeClass("none").addClass("visib");
	 	}else{
	 		$(".scroll").removeClass("visib").addClass("none");
	 	}
	},
	componentDidMount:function(){   
		var _this=this;
		setTimeout(function(){
			$("body").removeClass("app_loading").find("#app").fadeIn(600);
		}, 500);
		this.scrollTotop();
		$(window).scroll(function(){
			this.scrollTotop();
		}.bind(this)); 
		$(".scroll").on("click",function(e){  
			 $('html, body').animate({
		        scrollTop: 0
		    }, 500);
		});

		/*$(function(){ 
			$('[data-toggle="tooltip"]').tooltip(); 
		}); */ 
	},
	articleCLick:function(val,e){ 
		console.log(val,e.target);
	},
	handleLeftSwipe: function (e) {
	   console.log(e);
	},
	render:function(){
		return (
			<div className="page">  
			 	<ScrollTop />
			 	 
				<Header /> 
				<Content data={this.props.data}/>
				<Copyright />	 
			</div>
		);
	}
});  

window.pageNum=1; 
$.ajax({
 	url:'./js/moive.json',
 	type:'get',
 	dataType:'json', 
 	data:{pageNum:1},
 	success:function(data){ 
 		/*var html="",list='';
 		for (var i = 0; i < data.json.length; i++) {
 			 
 			html+='<li class="list-group-item" data-toggle="tooltip" data-placement="top" title="'+data.json[i].name+'"><a  href="###">'+data.json[i].name+'</a></li>';

 		};  
 		 
 		$(".tags").html(html); */   

 		/*var list=[];
 		for (var i = 0; i < data.json.length; i++) {   
 			var o={};
 			o.title=data.json[i]['title'];
 			o.boxoffice=data.json[i]['boxoffice'];
 			o.time=Mock.Random.date('yyyy-MM-dd HH:mm:ss'); 
 			o.desc=Mock.Random.cparagraph(); 
 			o.id="1001"+Mock.mock(/\d{5,5}/);     
 			o.tags=Mock.mock(
					  	[
						    "Spark",
							"LTS", 
							"微框架",
							"Lumen",
							"Whoops",
							"Event"
						]
					);  
    
 			list.push(o);  
 		};  
 		console.log(JSON.stringify(list)); */     

 		ReactDOM.render(<Page data={data.splice(0,1)}/>,document.getElementById("app"));   
 	}
 }); 
