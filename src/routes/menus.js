const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController');

router.get('/create', menuController.create);
router.post('/store', menuController.store);
router.get('/:id/edit', menuController.edit);
router.put('/:id', menuController.update);
router.delete('/:id', menuController.delete);
router.get('/:slug', menuController.show);

module.exports = router;