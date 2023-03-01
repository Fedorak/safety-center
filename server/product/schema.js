const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	name: String,
	description: String,
	price: String,
	characteristics: String,


	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	moderators: [
		{
			type: mongoose.Schema.Types.ObjectId,
			sparse: true,
			ref: 'User'
		}
	]
});

Schema.methods.create = function (obj, user, waw) {
	this.author = user._id;

	this.moderators = [user._id];

	this.name = obj.name;

	this.description = obj.description;

	this.price = obj.price;

	this.characteristics = obj.characteristics;

	this.category = obj.category;

}

module.exports = mongoose.model('Product', Schema);
