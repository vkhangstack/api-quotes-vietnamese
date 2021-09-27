'use strict';

const express = require('express');
const router = express.Router();
const addAuthor = require('../controller/authors/addAuthor');
const getAuthorById = require('../controller/authors/getAuthorById');
const getListAuthors = require('../controller/authors/getListAuthors');

router.post('/', addAuthor);
router.get('/:id', getAuthorById);
router.get('/', getListAuthors);

module.exports = router;
