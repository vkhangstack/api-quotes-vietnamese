'use strict';

const express = require('express');
const router = express.Router();
const {
  getAuthorById,
  getListAuthors,
  addAuthor,
} = require('../controller/authors/index');

router.post('/', addAuthor);
router.get('/author/:id', getAuthorById);
router.get('/', getListAuthors);

module.exports = router;
