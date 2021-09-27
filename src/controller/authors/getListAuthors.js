'use strict';

const Author = require('../../models/author');
const createError = require('http-errors');

const getListAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    res.send(author);
  } catch (error) {
    return createError(404, 'Bad request');
  }
};

module.exports = getListAuthors;
