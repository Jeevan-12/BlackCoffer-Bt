const express = require('express');
const route = express.Router();
const { getdata, getinsert } = require('../controller/controller');
route.get('/get', getdata);
route.get('/getinsert', getinsert);

module.exports = route;
