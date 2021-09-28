'use strict';

const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');

const getQuoteRandom = async (req, res) => {
  try {
    const quotes = await Quotes.find();
    const data = quotes[Math.floor(Math.random() * quotes.length)]; // Return random object of array
    res.send(data);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuoteRandom;
