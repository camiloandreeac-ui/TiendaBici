const express = require('express');
const router = express.Router();
// const mainController = require('../controllers/mainController');

// Placeholder routes
router.get('/', (req, res) => res.render('pages/index'));
router.get('/catalog', (req, res) => res.render('pages/catalog'));
router.get('/cart', (req, res) => res.render('pages/cart'));

module.exports = router;
