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


	var blockElementView = Backbone.View.extend({

		className: 'box',

		initialize: function() {	
			if (this.options.num === 4) this.$el.addClass('last');
		},

		events: {
			'mouseout .hoverbox'  : 'mouseOutHoverbox',
			'mouseover .hoverbox' : 'mouseOverHoverbox',
			'mouseout .textbox'   : 'mouseOutHoverbox',
			'mouseover .textbox'  : 'mouseOverHoverbox',
			'click .hoverbox'     : 'clickBox'
		},

		mouseOutHoverbox: function() {
			this.$el.find(' .videobox').fadeOut('500', 'linear');
			this.$el.find(' .hoverbox').css('opacity', '0.5');
			this.$el.find(' .hoverbox').animate({ 'opacity' : '1' }, {'duration': 300, 'easing': 'linear'});	
		},

		mouseOverHoverbox: function() {
			this.$el.find(' .videobox').fadeIn('1000', 'linear');
		},

		template: function() {
			return '<span><a href="#gallery'+this.options.num+'">' + this.options.link + '</a></span> \
			<div class="hoverbox box' + this.options.num + '"></div> \
			<div class="textbox"></div> \
			<div class="videobox"> \
				<video width="190" height="44" autoplay loop> \
				  <source src="mp4/stars.mp4" type="video/mp4"> \
				  <source src="mp4/stars.mov" type="video/mov"> \
				  <source src="mp4/stars.webm" type="video/webm"> \
				  <!-- <source src="stars.ogg" type="video/ogg"> \
				  <source src="stars.webm" type="video/webm"> --> \
				</video> \
			</div>';
		},

		render: function() {
			this.$el.attr('style', 'background-image: url('+this.options.imgURL+')')
			this.$el.html( this.template() );
		},

		clickBox: function() {
			window.location = '#gallery' + this.options.num;
		}

	});

	return blockElementView;

});