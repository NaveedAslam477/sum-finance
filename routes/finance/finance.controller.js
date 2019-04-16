'use strict';
var mongoose = require('mongoose');
var financeModel = require('./finance.model')
	var controller = {}

controller.list_all_financeModels = function (req, res) {
	financeModel.find({}, function (err, finance) {
		if (err)
			res.send(err);
		res.json(finance);
	});
};


controller.create_a_financeModel = function (req, res) {
	var new_financeModel = new financeModel(req.body);
	new_financeModel.save(function (err, finance) {
		if (err)
			res.send(err);
		res.json(finance);
	});
};


controller.read_a_financeModel = function (req, res) {
	financeModel.findById(req.params.financeId, function (err, finance) {
		if (err)
			res.send(err);
		res.json(finance);
	});
};


controller.update_a_financeModel = function (req, res) {
	financeModel.findOneAndUpdate({ _id: req.params.financeId }, req.body, { new: true }, function (err, finance) {
		if (err)
			res.send(err);
		res.json(finance);
	});
};


controller.delete_a_financeModel = function (req, res) {
	financeModel.remove({
		_id: req.params.financeId
	}, function (err, finance) {
		if (err)
			res.send(err);
		res.json({ message: 'financeModel successfully deleted' });
	});
};



module.exports = controller;