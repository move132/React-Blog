var Header=React.createClass({
	render:function(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top bg">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">
							<img src="image/logo1.png" height="32" width="32" alt="" />
						</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav mo-nav">
							<li className="active">
								<a href="#">
									首页
								</a>
							</li> 
							<li>
								<a href="#">资讯</a>
							</li> 
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<form className="navbar-form navbar-left" role="search">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Search" />
								</div>
								<span type="submit" className="btn btn-default btn-search">搜索</span>
							</form> 
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports=Header;