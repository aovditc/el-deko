define([
	'app',
	'Underscore',
	'jQuery',
	'Backbone',
	'galleryLIview'
], function(
	app,
	_,
	$,
	Backbone,
	galleryLIview
	) {

	var galleryUL = Backbone.View.extend({

		tagName : 'ul',

		initialize: function() {
			
		},

		render: function() {
			this.collection.each( function(model) {
				var galleryLIviewInstance = new galleryLIview( { model: model } );
				this.$el.append( galleryLIviewInstance.render().$el );
			}, this);
			return this;
		}

	});
	
	return galleryUL;

});