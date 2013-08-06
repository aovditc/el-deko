define([
	'app',
	'Underscore',
	'jQuery',
	'Backbone',
	'blockElementView'
], function(
	app,
	_,
	$,
	Backbone,
	blockElementView
	) {


	var homePageView = Backbone.View.extend({

		el: '.container',
		initialize: function() {
			this.render();
		},

		buttonsTemplate: function() {
			return '<div class="butbelow"></div> <div class="butbelow"></div> <div class="butbelow"></div> <div class="butbelow last"></div>'
		},

		render: function() {
			var view = [];
			_.each([1, 2, 3, 4], function(num) {
				view[num] = new blockElementView({
					num : num,
					imgURL : this.model.returnImgURL(num),
					link : this.model.returnLink(num)
				});

				this.$el.append( view[num].el );
				view[num].render();
			}, this);	

			this.addClearfix();
			this.$el.append( this.buttonsTemplate() );
		},

		addClearfix: function() {
			this.$el.append('<div class="clearfix"></div>');
		}		

	});

	return homePageView;

});