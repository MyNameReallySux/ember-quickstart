import Ember from 'ember';
import _FileMap from 'ember-quickstart/file_maps/space-icons';

const SpaceIconComponent = Ember.Component.extend({
	tagName: "span",
	name: "",
	src: "",
	
	init() {
		this._super(...arguments);
		this.errors = [];
	},
	
	didReceiveAttrs(){
		this._super(...arguments);
		
		let passed = this.get('name')
		let parts = passed.split("/");
		let iconname = "";
		let iconset = "";
		if(parts.length > 1){
			iconset = parts.shift();
			iconname = parts.join("/");	
		} else {
			iconname = passed;
			iconset = "default";
		}
		
		let icons = _FileMap[iconset];
		if(icons){
			let root = icons["_root"];
			let filename = icons[iconname];
			this.set("src", `${root}/${filename}`)
		}
		
	}
});

SpaceIconComponent.reopenClass({
	positionalParams: ['name', 'set'],
})

export default SpaceIconComponent;
