'use strict';
/**
 * Return list quotes
 */
const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');

const getQuotes = async (_req, res) => {
  try {
    const quotes = await Quotes.find();
    if (!quotes) return res.send(new Error.NotFound('quotes not found'));

    res.send(quotes);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuotes;
