import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('planets');
  this.route('stars');
});

Router.reopen({
	didTransition: function () {
		Ember.run.scheduleOnce('afterRender', this, function() {
			onRouteTransition()
		});
	},
});

export default Router;
