define([
	'app',
	'Underscore',
	'jQuery',
	'Backbone'
], function(
	app,
	_,
	$,
	Backbone
	) {

	var galleryView = Backbone.View.extend({

		tagName: 'div',
		id: 'gallery',


		initialize: function() {
			this.renderTemplate();
			this.registerDOMElements();
			this.doOpeningAnimation(this.options.id);			
		},

		template: function() {
			return _.template('<div id="leftCover"></div><div id="rightCover"></div><div id="leftHover"></div><div id="rightHover"></div><div id="galleryImages"></div>'); 
		},

		renderTemplate: function() {
			$('.container').append( this.template() );
		},

		registerDOMElements: function() {
			this.dom = {
				'leftCover'        : $('#leftCover'),
				'rightCover'	   : $('#rightCover'),
				'leftHover'        : $('#leftHover'),
				'rightHover'	   : $('#rightHover'),
				'galleryImages'    : $('galleryImages')
			}
		},

		doOpeningAnimation: function(id) {
			switch (id) {
				case '1':

					break;
				case '2':
					
					break;
				case '3':
					
					break;
				case '4':
					
					break;			

			}
			this.showGallery(id);	
		},

		showGallery: function(id) {
			
		}

	});

	return galleryView;

});
