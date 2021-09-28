'use strict';

const Author = require('../../models/author');
const Error = require('throwable-http-errors');

const addAuthor = async (req, res) => {
  try {
    let _id = req.body.id;
    let name = req.body.name;
    let bio = req.body.bio || null;
    let link = req.body.link || null;
    let description = req.body.description || null;
    let quoteCount = req.body.quoteCount || null;

    const checkAuthor = await Author.findOne({ name });
    if (checkAuthor)
      return res.send(new Error.NotAcceptable('Author already exists'));

    const author = await new Author({
      _id,
      name,
      bio: bio || 'unknown',
      link: link || 'unknown',
      description: description || 'unknown',
      quoteCount: quoteCount || 'unknown',
    }).save();

    if (!_id || !name)
      return res.send(new Error.NotFound('Id or name required'));

    return res.send(author);
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = addAuthor;
