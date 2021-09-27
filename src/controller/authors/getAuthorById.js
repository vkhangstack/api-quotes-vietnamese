'use strict';

const Author = require('../../models/author');

const createError = require('http-errors');

const getAuthorById = async id => {
  try {
    const author = await Author.findById(id);
    return author;
  } catch (error) {
    return createError(500, 'Not found author by Id');
  }
};

module.exports = {
  getAuthorById,
};
