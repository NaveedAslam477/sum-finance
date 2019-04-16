var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = Schema({
	cont_id:
	{
		type:String,
	},
	cont_saln:
	{
		type:String,
	},
	first_name:
	{ 
		type:String,
	},
	last_name: 
	{
		type:String,
	},
	comp_name: 
	{
		type:String,
	},
	display_name:
	{
		type:String,
	},
	email: 
	{
		type:String,
	},
	mobile:
	{
		type:String,
	},
	email_type: 
	{
		type:String,
	},
	cont_type: 
	{
		type: String,
	},
	  billing_address:
	{
		street1: String,
		street2: String,
		city: String,
		state: String,
		zipcode:String,
		country: String,
		phone:String
	},
	  shipping_address:
	{
		street1: String,
		street2: String,
		city: String,
		state: String,
		zipcode:String,
		country: String,
		phone:String
	},
	  remarks:
	{
		  type:String,
	},

});

module.exports = mongoose.model('Customer', customerSchema);
