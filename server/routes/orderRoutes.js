const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send("Order Data");
});

module.exports = router;