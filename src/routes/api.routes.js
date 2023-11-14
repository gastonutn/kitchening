const express = require('express');
// const { checkEmail } = require('../controllers/APIs/usersApiController');
const { getCart, addItemToCart } = require('../controllers/APIs/cartApiController');
const router = express.Router();

/* /api */
router
    // .get('/check-email', checkEmail)
    .get('/cart', getCart)
    .post('/cart', addItemToCart)


module.exports = router;