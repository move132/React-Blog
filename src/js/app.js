 
require("bootstrapCss"); 
require("../css/comm.scss"); 
require("./canvasEffecFn");  
var Header=require("./component/header");
var Copyright=require("./component/copyright");
var Content=require("./component/content");


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
//ReactDOM.render(<Page />,document.body);