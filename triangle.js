var Tetrahedron = new Class({

	faces: [],
	colors: [
		'0-#999-#aaa', '0-#eee-#9897F7', '180-#eee-#98F797', '180-#333-#444'
	],

	initialize: function( wrapper ) {
		this.wrapper = document.id( wrapper );
		this.element = new Element('div', {
			style: 'position:relative; margin:0 auto; width:400px; height:400px; -webkit-transform-style: preserve-3d; -webkit-transition:all .5s ease-out; -webkit-transform: rotateY(3deg) rotateX(7deg);'
		}).inject( this.wrapper );

		for ( var xx = 0; xx < 4; xx++ ) {
			var styles = '';
			if ( xx == 0 )
				styles = '-webkit-transform: rotateX(-16.5deg);-webkit-transform-origin: 0% 100%;';
			if ( xx == 1 )
				styles = '-webkit-transform: rotateY(-60deg) rotateX(16.5deg);-webkit-transform-origin: left bottom;';
			if ( xx == 2 )
				styles = '-webkit-transform: rotateY(60deg) rotateX(16.5deg);-webkit-transform-origin: right bottom;';
			if ( xx == 3 )
				styles = '-webkit-transform: rotateX(-90deg) translateZ(-6px) translateY(5px);-webkit-transform-origin: right bottom;';
			this.faces.push( new Element('div', {
				id: 'tetrahedron-' + xx,
				style: 'position:absolute;top:0;left:0;' + styles
			}).inject( this.element ) );

			var path = Raphael("tetrahedron-" + xx, 400, 400);
			var vertex = 0;
			if ( xx == 3 )
				vertex = 50;
			var tetrahedron = path.path("M0,400L200," + vertex + "L400,400Z");

			tetrahedron.attr({ fill: this.colors[ xx ], stroke: '#fff', 'stroke-width': 2 });
		}
	}

});

window.addEvent('domready', function() {
	new Tetrahedron( document.id('wrap-tetrahedron') );
});