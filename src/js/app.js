 
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
		//new grid3D( document.getElementById( 'grid3d' ) );

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
				<Header /> 
				<Content />
				<Copyright />	 
			</div>
		);
	}
});  
 
ReactDOM.render(<Page />,document.getElementById("app")); 