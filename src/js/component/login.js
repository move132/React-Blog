

var Login=React.createClassName({
	render:function(){
		return (
			<div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
				<div className="modal-dialog modal-mx">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title">登录</h4>
						</div>
						<div className="modal-body">
							<form className="form-horizontal">
								<div className="form-group">
									<label htmlFor="inputEmail3" className="col-sm-3 control-label">邮箱：</label>
									<div className="col-sm-8">
										<input type="email" className="form-control col-sm-6" id="inputEmail3" placeholder="Email" />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputPassword3" className="col-sm-3 control-label">密码：</label>
									<div className="col-sm-8">
										<input type="password" className="form-control col-sm-6" id="inputPassword3" placeholder="Password" />
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-3 col-sm-10">
										<button type="submit" className="btn btn-success" >登录</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports=Login;