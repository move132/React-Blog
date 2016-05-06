 

var stage;
var img=new Image();
var sprite;
var canvas=document.createElement("canvas");
 

window.onload=function(){    
	canvasEffecFn.isCreateCanvas(canvas);
	window.onresize=function(){
		canvasEffecFn.isCreateCanvas(canvas);
	}
 
	stage=new createjs.Stage(canvas);
	stage.addEventListener("stagemousedown",canvasEffecFn.clickCanvas);
	stage.addEventListener("stagemousemove",canvasEffecFn.moveCanvas); 
	var data={  
		images:['./image/m.png'], 
		frames: {width: 10, height: 10, regX: 10, regY:10, spacing:0, margin:0}
	}
	sprite=new createjs.Sprite(new createjs.SpriteSheet(data));  
	//createjs.Ticker.setFPS(10);
	createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT; 
	createjs.Ticker.addEventListener("tick",canvasEffecFn.tick);
}

var canvasEffecFn={
	tick:function(e){
		var t=stage.getNumChildren();
		for (var i = t-1; i>0;i--) {
			var s=stage.getChildAt(i); 
			s.vY+=2;
			s.vX+=1;
			s.x+=s.vX;
			s.y+=s.vY; 
			s.scaleX=s.scaleY=s.scaleX;//+s.vS;
			s.alpha+=s.vA+s.vA;
			if (s.alpha<=0 || s.y>canvas.height) {
				stage.removeChildAt(i);
			};
		};
		stage.update(e);
	},
	addS:function(count ,x,y ,speed){
		for (var i = 0; i < count; i++) {
			var s=sprite.clone();
			s.x=x;
			s.y=y;
			s.alpha=Math.random()*0.5+0.5;
			s.scaleX=s.scaleY=Math.random()+0.3;

			var a=Math.PI*2*Math.random();
			var v=(Math.random()-0.5)*30*speed;
			s.vX=Math.cos(a)*v;
			s.vY=Math.sin(a)*v;
			s.vS=(Math.random()-0.5)*0.2;
			s.vA=-Math.random()*0.05-0.01;
			stage.addChild(s);
		}
	},
	clickCanvas:function(e){ 
		canvasEffecFn.addS(Math.random()*100+200,stage.mouseX,stage.mouseY,2); 
	},
	moveCanvas:function(e){
		canvasEffecFn.addS(Math.random()*8,stage.mouseX,stage.mouseY,10);
	},
	isCreateCanvas:function(canvas){
		document.body.appendChild(canvas); 
		if ($(window).width() > 768) {
			console.log($(window).height());
			canvas.width=$(window).width(); 
			canvas.height=$(window).height();
		}else{
			 document.body.removeChild(canvas);
		}
	}
}

module.exports=canvasEffecFn;
 