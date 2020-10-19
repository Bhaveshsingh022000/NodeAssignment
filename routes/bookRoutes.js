const express = require('express');
const bookController = require('../controller/bookController');

const router = express.Router();

router.get('/',bookController.getBooks);
router.get('/addBook',bookController.getAddBooks);
router.post('/addBook',bookController.postAddBooks);
router.get('/bookDetails/:id',bookController.getBookDetails);

module.exports = router;