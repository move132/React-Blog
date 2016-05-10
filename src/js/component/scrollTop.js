/**
 * 返回到顶部组件
 */

var ScrollTopComponent=React.createClass({
	render:function(){
		return (
			<div className="scroll">
				<div className="scroll_inner">
					<div className="js_trigger">
						<span className="glyphicon glyphicon-arrow-up"></span>
					</div>
				</div>
			</div>
		);
	}
});

module.exports=ScrollTopComponent;