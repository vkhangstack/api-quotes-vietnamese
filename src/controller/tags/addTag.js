'use strict';

const Error = require('throwable-http-errors');
const Tags = require('../../models/tags');

const addTag = async (req, res) => {
  try {
    const checkTag = await Tags.findOne({ name: req.body.name });
    if (checkTag)
      return res.send(new Error.NotAcceptable('Tag already exists'));
    const tag = await new Tags(req.body).save();

    res.send(tag);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = addTag;
