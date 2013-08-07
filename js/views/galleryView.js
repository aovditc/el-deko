define([
	'app',
	'Underscore',
	'jQuery',
	'Backbone',
	'galleryULview'
], function(
	app,
	_,
	$,
	Backbone,
	galleryULview
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
			$('.container').append( this.$el );
			this.$el.append( this.template() );
		},

		events: {
			'click #leftHover'   : 'goPrevious',
			'click #rightHover'  : 'goNext'
		},

		registerDOMElements: function() {
			this.dom = {
				'leftCover'        : $('#leftCover'),
				'rightCover'	   : $('#rightCover'),
				'leftHover'        : $('#leftHover'),
				'rightHover'	   : $('#rightHover'),
				'galleryImages'    : $('#galleryImages')
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
			this.collection.fakeFetch();
			galleryULviewInstance = new galleryULview({ collection: this.collection });
			this.dom.galleryImages.html( galleryULviewInstance.render().$el );

			this.dom.galleryImages.find('li:first').addClass('visible');
			$('.box, .butbelow').remove();
		},

		goPrevious: function() {
			var currentImg = this.dom.galleryImages.find('li.visible');
			currentImg.removeClass('visible');	
			var prevImg = currentImg.prev();
			prevImg.length ? prevImg.addClass('visible') : this.dom.galleryImages.find('li:last-child').addClass('visible');
		},

		goNext: function() {
			var currentImg = this.dom.galleryImages.find('li.visible');
			currentImg.removeClass('visible');	
			var nextImg = currentImg.next();
			nextImg.length ? nextImg.addClass('visible') : this.dom.galleryImages.find('li:first-child').addClass('visible');
		}

	});

	return galleryView;

});
