'use strict';

const Author = require('../../models/author');

const createError = require('http-errors');

const getAuthorById = async (req, res) => {
  try {
    let id = req.params.id;
    const author = await Author.findById({ _id: id });
    if (!author) return createError(404, 'Author not found');

    res.send(author);
  } catch (error) {
    return createError(404, 'Bad request');
  }
};

module.exports = getAuthorById;
