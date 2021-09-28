'use strict';

const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');

const getQuotes = async (req, res) => {
  try {
    const quotes = await Quotes.find();

    res.send(quotes);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuotes;
