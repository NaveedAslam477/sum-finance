var express = require('express');
var router = express.Router();
var itemcontroller = require('./item.controller')
/* GET home page. */
router.post('/create',itemcontroller.create_a_itemModel);
router.get('/get-all',itemcontroller.list_all_itemModels);
router.post('/get/:itemId',itemcontroller.read_a_itemModel);
router.post('/update/:itemId',itemcontroller.update_a_itemModel);
router.post('/delete/:itemId',itemcontroller.delete_a_itemModel);


module.exports = router;