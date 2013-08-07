define([
	'app',
	'Underscore',
	'Backbone',
	'homePageView',
	'homePageModel',
	'galleryView',
	'galleryCollection'
], function(
	app,
	Underscore,
	Backbone,
	homePageView,
	homePageModel,
	galleryView,
	galleryCollection
	) {

	var Router = Backbone.Router.extend({

		routes: {
			''                : 'openHomePage',
			'gallery:id'      : 'openGallery'
		},

		openHomePage: function() {
			$('.container').html('');
			var homePageModelInstance = new homePageModel;
			var homePageViewInstance = new homePageView({
				model : homePageModelInstance
			});
		},

		openGallery: function(id) {
			var galleryCollectionInstance = new galleryCollection( { id : id } );
			var galleryViewInstance = new galleryView({
				id : id,
				collection: galleryCollectionInstance
			});
		}

	});

	return Router;

});