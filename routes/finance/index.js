var express = require('express');
var router = express.Router();
var financeControler = require('./finance.controller')
/* GET home page. */
router.post('/create',financeControler.create_a_financeModel);
router.get('/get-all',financeControler.list_all_financeModels);
router.post('/get/:financeId',financeControler.read_a_financeModel);
router.post('/update/:financeId',financeControler.update_a_financeModel);
router.post('/delete/:financeId',financeControler.delete_a_financeModel);


module.exports = router;