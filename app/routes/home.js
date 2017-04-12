import Ember from 'ember';

export default Ember.Route.extend({
	quotes: [{
		content: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.`, 
		author: "Captain Kirk", 
		company: "Starship Enterprises",	
	}, {
		content: `The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.`,
		author: "Galileo Galilei",
		company: "Greek Philosopher"
	}, {
		content: `Sirius, the brightest star in the heavens…. My grandfather would say we're part of something incredibly wonderful - more marvelous than we imagine. My grandfather would say we ought to go out and look at it once in a while so we don't lose our place in it.`,
		author: "Robert Fulghum",
		company: "Renouned Author"
	}],
	
	model: function(params){
		return Ember.RSVP.hash({
			quotes: this.get("quotes")
		})
	}
});
