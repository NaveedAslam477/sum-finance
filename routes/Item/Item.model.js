var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = Schema({
	item_id:
	{
		type:String,
	},
	item_type:
	{
		type:String,
	},
	item_name:
	{ 
		type:String,
	},
	unit: 
	{
		type:String,
	},
	rate: 
	{
		type:String,
	},
	tax:
	{
		type:String,
	},
	desc: 
	{
		type:String,
	},
	purchaseinfo:
	{
		type:String,
	},
});

module.exports = mongoose.model('item', itemSchema);
