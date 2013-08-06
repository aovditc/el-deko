requirejs.config({
	baseUrl: 'js/',
	paths: {
		jQuery : 'libs/jquery-min',
		Underscore: 'libs/underscore-min',
		Backbone: 'libs/backbone-min',
		text: 'libs/text-min',
		Modernizr: 'libs/modernizr.custom',
		app: 'app',
		Router : 'router/router',
		homePageView : 'views/homePageView',
		homePageModel : 'models/homePageModel',
		blockElementView : 'views/blockElementView',
		galleryView : 'views/galleryView'
	},
	shim : {
	    jQuery : {
	      exports : 'jQuery'
	    },
	    Underscore : {
	      exports : '_'
	    },
	    Backbone : {
	      deps : ['jQuery', 'Underscore'],
	      exports : 'Backbone'
	    },
	    Modernizr : {
	    	exports : 'Modernizr'
	    }
	  }
	});

define([
	'app',
	'Modernizr',
	'Backbone',
	'Router'
], function (app, Modernizr, Backbone, Router) {

	var app = app || {};

	new Router();
    Backbone.history.start({ hashChange:true });
	
});
