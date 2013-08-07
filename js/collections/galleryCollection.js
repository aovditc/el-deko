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
			this.fakeFetch();
			//this.fetch();
		},

		/* url : 'getImages.php?gid='+this.options.id, */

		fakeFetch: function() {
			var defaults = [
				{ imgURL : "g/3/001.jpg" },
				{ imgURL : "g/3/002.jpg" },
				{ imgURL : "g/3/003.jpg" },
				{ imgURL : "g/3/004.jpg" },
				{ imgURL : "g/3/005.jpg" },
				{ imgURL : "g/3/006.jpg" },
				{ imgURL : "g/3/007.jpg" },
				{ imgURL : "g/3/008.jpg" },
				{ imgURL : "g/3/009.jpg" },
				{ imgURL : "g/3/010.jpg" },
				{ imgURL : "g/3/011.jpg" }
			];
			this.reset(defaults);
		}


	});

	return galleryCollection;

});