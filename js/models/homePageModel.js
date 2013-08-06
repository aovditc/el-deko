define([
	'app',
	'Underscore',
	'Backbone'
], function(
	app,
	_,
	Backbone
	) {


	var homePageModel = Backbone.Model.extend({

		initialize: function() {

		},

		defaults: {
			img1 : 'img/img1.jpg',
			img2 : 'img/img2.jpg',
			img3 : 'img/img3.jpg',
			img4 : 'img/img4.jpg',
			link1 : 'DECOR',
			link2 : 'BLUMEN',
			link3 : 'DETAILS',
			link4 : 'SPECIALS'
		}, 

		returnImgURL : function( num ) {
			return this.get('img' + num);
		},

		returnLink : function( num ) {
			return this.get('link' + num);
		}


	});

	return homePageModel;

});