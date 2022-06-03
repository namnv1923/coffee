const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/book', siteController.book);
router.get('/', siteController.index);

module.exports = router;
