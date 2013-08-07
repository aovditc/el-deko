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

	var galleryLI = Backbone.View.extend({

		tagName : 'li',

		initialize: function() {

		},

		render: function() {
			this.$el.html('<img src="' + this.model.get("imgURL") + '">');
			return this;
		}

	});
	
	return galleryLI;

});