/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const {getResponse} = require('../controllers/response.controller');

router.get('/api', getResponse );


module.exports = router;

