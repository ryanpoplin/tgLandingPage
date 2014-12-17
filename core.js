(function($) {

	"use strict";
	
	// dep. checker...
	console.log(jQuery);
	console.log(_);
	console.log(Backbone);

	var IndexView = Backbone.View.extend({
		tagName: 'div',
		el: '#spa',
		template: _.template($('#index-view').html()),
		render: function() {
			$(this.el).html(this.template({}));
		}
	});
	
	var AboutView = Backbone.View.extend({	
		tagName: 'div',
		el: '#spa',
		template: _.template($('#about-view').html()),
		render: function() {			
			$(this.el).html(this.template({}));
		}
	});
	
	var Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'about': 'about'
		},
		index: function () {
			var indexView = new IndexView;
			indexView.render();
		},
		about: function () {
			var aboutView = new AboutView;
			aboutView.render();
		}
	});

	$(function() {
		new Router;
		Backbone.history.start();
	});

}(jQuery));