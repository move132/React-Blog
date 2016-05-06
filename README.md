# React-Blog
React-Blog
	var o=[0,1,2];
	var s=[9,8,7];
	function P(o){
		this.obj=o;
		this._init();
	}

	P.prototype._init=function(){
	 	this.o=this.obj; 
	 	console.log(this.obj);
	}

	P.prototype._event=function(){ 
	 	console.log(this.o);
	}

	new P(o);
	new P(s);