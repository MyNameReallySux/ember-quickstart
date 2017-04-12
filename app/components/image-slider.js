import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		this._super(...arguments);
		this.errors = [];
	},

	didUpdateAttrs() {
		this._super(...arguments);
		this.set('errors', []);
	},
	
	didReceiveAttrs(){
		this._super(...arguments);
		let data = this.get("data");
		if(data)
			this.set("imgs", data.split(","))
	},
	
	didInsertElement: function() {
		this._super(...arguments)
		
		setBackgroundImages(this.$());

        this.$().find(".image-slider").owlCarousel({
			items: 1,
			center: true,
			autoplay: true,
			loop: true,
			animateOut: 'fadeOut'
		});
    },
	willDestroyElement() {
		this._super(...arguments);
		let element = this.$().find(".image-slider")
		element.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
		element.find('.owl-stage-outer').children().unwrap();
	}
});
