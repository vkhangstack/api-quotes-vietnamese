'use strict';
/**
 * Return single quote of day
 */
const Error = require('throwable-http-errors');

const getQuoteOfDay = async (_req, res) => {
  try {
    await console.log('ready');
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getQuoteOfDay;
