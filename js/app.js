define([
	'Underscore',
	'Backbone'
], function(_, Backbone) {

	var app = new Array;
	var app = {

		Models : new Array,
		Views : new Array,
		Events : _.extend({}, Backbone.Events),
		Collections : new Array,
		Router : new Array

	}

  	return app;

});
