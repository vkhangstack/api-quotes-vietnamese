'use strict';

const Author = require('../../models/author');

const Error = require('throwable-http-errors');

const getAuthorById = async (req, res) => {
  try {
    let id = req.params.id;
    const author = await Author.find({ _id: { $eq: id } });

    if (!author)
      return res.send(new Error.NotFound(`No author with id #${_id}`));

    return res.send(author);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getAuthorById;
