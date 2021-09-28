'use strict';

const Author = require('../../models/author');
const Error = require('throwable-http-errors');

const getListAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    return res.send(author);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getListAuthors;
