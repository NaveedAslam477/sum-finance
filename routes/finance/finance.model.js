var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = Schema({
	
	firstName: String,
	lastName: String,
	dateOfBirth: Date,
	address: String,
	street: String,
	city: String,
	state: String,
	county: String,
	zipCode: String,
	phone: String,
	phoneType: String,
	email: String,
	emailType: String,
	
});

module.exports = mongoose.model('Customer', customerSchema);
