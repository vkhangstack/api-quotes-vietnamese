'use strict';

const Author = require('../../models/author');
const createError = require('http-errors');

const addAuthor = async (id, name, bio, link, description, quoteCount) => {
  try {
    const checkId = await Author.findById(id);
    if (checkId) return createError(401, 'Author already exists');

    const user = await new Author({
      _id: id,
      name: name,
      bio: bio,
      link: link,
      description: description,
      quoteCount: quoteCount,
    }).save();
    return user;
  } catch (error) {
    return createError(404, 'Bad request');
  }
};

module.exports = {
  addAuthor,
};
