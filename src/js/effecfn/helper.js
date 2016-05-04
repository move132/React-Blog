var docElem = window.document.documentElement,
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = {
		pointerevents : Modernizr.pointerevents,
		csstransitions : Modernizr.csstransitions,
		csstransforms3d : Modernizr.csstransforms3d
	};


var helper={
	scrollX:function(){
		return window.pageXOffset || docElem.scrollLeft; 
	},
	scrollY:function() {
		return window.pageYOffset || docElem.scrollTop;
	},
	getOffset:function(el) {
		var offset = el.getBoundingClientRect();
		return { top : offset.top + scrollY(), left : offset.left + scrollX() };
	},
	getViewportW:function() {
		var client = docElem['clientWidth'],
			inner = window['innerWidth'];
		
		if( client < inner )
			return inner;
		else
			return client;
	},
	getViewportH:function() {
		var client = docElem['clientHeight'],
			inner = window['innerHeight'];
		
		if( client < inner )
			return inner;
		else
			return client;
	},
	extend:function( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	},
	support:support
};

module.exports=helper;