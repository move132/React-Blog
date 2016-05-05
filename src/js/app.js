 
require("bootstrapCss"); 
require("../css/comm.scss"); 
require("../css/component.css"); 
//var $=jQuery=require("jquery");  
 
require("bootstrap");  

var Header=require("./component/header");
var Copyright=require("./component/copyright");
var Content=require("./component/content");

var Mock=require('mockjs');
  

/*<div>
	<Header /> 
	<Content />
	<Copyright />
</div>*/

var Page=React.createClass({
	componentDidMount:function(){  
		var _this=this;
		$(function(){
			$('[data-toggle="tooltip"]').tooltip();
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
				<Header /> 
				<Content data={this.props.data}/>
				<Copyright />	 
			</div>
		);
	}
});  
 
 $.ajax({
 	url:'./js/moive.json',
 	type:'get',
 	dataType:'json', 
 	success:function(data){ console.log(data); 
 		var html="",list='';
 		for (var i = 0; i < data.json.length; i++) {
 			 
 			html+='<li class="list-group-item" data-toggle="tooltip" data-placement="top" title="'+data.json[i].name+'"><a  href="###">'+data.json[i].name+'</a></li>';

 			//$("#list .articles").prepend(item_tpl.replace(/\{title\}/g,array[i]));
 		};
 		 
 		$(".tags").html(html);

 		var list=[];
 		for (var i = 0; i < data.json.length; i++) {
 			var o={};
 			o.title=data.json[i]['title'];
 			o.boxoffice=data.json[i]['boxoffice'];
 			o.time=Mock.Random.date('yyyy-MM-dd HH:mm:ss'); 
 			o.desc=Mock.Random.cparagraph()+Mock.Random.cparagraph()+Mock.Random.cparagraph(); 

 			list.push(o);
 		};
 		console.log(list);
 		ReactDOM.render(<Page data={list}/>,document.getElementById("app"));  
 	}
 }); 
