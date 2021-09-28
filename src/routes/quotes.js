'use strict';

const express = require('express');
const router = express.Router();
const {
  addQuote,
  getQuotes,
  getQuoteRandom,
  getQuoteByAuthor,
} = require('../controller/quotes/index');

router.post('/', addQuote);
router.get('/', getQuotes);
router.get('/random', getQuoteRandom);
router.get('/author/:id', getQuoteByAuthor);

module.exports = router;
