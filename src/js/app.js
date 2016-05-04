 
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
	render:function(){
		return (
			<div>
				<Header /> 
				<Content />
				<Copyright /> 
			</div>
		);
	}
});  

ReactDOM.render(<Page />,document.getElementById("app")); 