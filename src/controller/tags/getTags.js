'use strict';

const Error = require('throwable-http-errors');
const Tags = require('../../models/tags');

const getTags = async (_req, res) => {
  try {
    const tags = await Tags.find();
    res.send(tags);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = getTags;
