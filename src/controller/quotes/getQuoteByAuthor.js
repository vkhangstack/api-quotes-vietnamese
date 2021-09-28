'use strict';

const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');
const Author = require('../../models/author');
/**
 * get single quote by id author
 * @param {id} req
 * @param {id} res
 * @returns
 */
const getQuoteByAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const authorId = await Author.findOne({ _id: id });
    if (!authorId) return res.send(new Error.NotFound('Author not found'));

    const quote = await Quotes.find({
      author: { _id: authorId._id, name: authorId.name },
    });
    if (!quote) return res.send(new Error.NotFound('Author not found'));

    const data = quote[Math.floor(Math.random() * quote.length)]; // random a quote object of array
    return res.send(data);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuoteByAuthor;
