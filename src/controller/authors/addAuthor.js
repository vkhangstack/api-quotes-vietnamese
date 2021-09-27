'use strict';

const Author = require('../../models/author');
const createError = require('http-errors');

const addAuthor = async (req, res) => {
  try {
    let id = req.body.id;
    let name = req.body.name;
    let bio = req.body.bio || null;
    let link = req.body.link || null;
    let description = req.body.description || null;
    let quoteCount = req.body.quoteCount || null;

    const author = await new Author(
      id,
      name,
      bio,
      link,
      description,
      quoteCount
    );
    if (!id || !name) return createError(400, 'Id or name is required');
    res.send(author);
  } catch (error) {
    return createError(404, 'Bad request');
  }
};

module.exports = addAuthor;
