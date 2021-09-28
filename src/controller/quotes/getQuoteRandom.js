'use strict';
/**
 * Return single quote from list quotes
 */
const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');

const getQuoteRandom = async (req, res) => {
  try {
    const quotes = await Quotes.find();
    const data = quotes[Math.floor(Math.random() * quotes.length)]; // Return random object of array
    if (!data) return res.send(new Error.NotFound('No quote found'));
    return res.status(200).send(data);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuoteRandom;
