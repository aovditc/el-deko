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

	var galleryCollection = Backbone.Collection.extend({

		initialize: function() {
			this.fetch();
		},

		url : 'getImages.php?gid='+this.options.id,





	});

	return galleryCollection;

});