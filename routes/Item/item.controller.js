'use strict';
var mongoose = require('mongoose');
var itemModel = require('./item.model')
	var controller = {}

controller.list_all_itemModels = function (req, res) {
	itemModel.find({}, function (err, item) {
		if (err)
			res.send(err);
		res.json(item);
	});
};


controller.create_a_itemModel = function (req, res) {
	var new_itemModel = new itemModel(req.body);
	new_itemModel.save(function (err, item) {
		if (err)
			res.send(err);
		res.json(item);
	});
};


controller.read_a_itemModel = function (req, res) {
	itemModel.findById(req.params.itemId, function (err, item) {
		if (err)
			res.send(err);
		res.json(item);
	});
};


controller.update_a_itemModel = function (req, res) {
	itemModel.findOneAndUpdate({ _id: req.params.itemId }, req.body, { new: true }, function (err, item) {
		if (err)
			res.send(err);
		res.json(item);
	});
};


controller.delete_a_itemModel = function (req, res) {
	itemModel.remove({
		_id: req.params.itemId
	}, function (err, item) {
		if (err)
			res.send(err);
		res.json({ message: 'item Model successfully deleted' });
	});
};



module.exports = controller;