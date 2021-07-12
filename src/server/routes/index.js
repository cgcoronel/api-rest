const express = require('express');
const router = express.Router();

//Get the routes.
const controller = require('../controller');

//Bind routes with controller.
router.post('/shorten', controller.saveUrl);
router.get('/domain', controller.getDomain);
router.get('/:id', controller.getUrl);

module.exports = router;
