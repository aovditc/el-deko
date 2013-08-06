define([
	'app',
	'Underscore',
	'Backbone',
	'homePageView',
	'homePageModel',
	'galleryView'
], function(
	app,
	Underscore,
	Backbone,
	homePageView,
	homePageModel,
	galleryView
	) {

	var Router = Backbone.Router.extend({

		routes: {
			''                : 'openHomePage',
			'gallery:id'      : 'openGallery'
		},

		openHomePage: function() {
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