'use strict';

const Error = require('throwable-http-errors');
const Quotes = require('../../models/quotes');
const Tags = require('../../models/tags');
const Author = require('../../models/author');

const addQuote = async (req, res) => {
  try {
    let content = req.body.content;
    let author = req.body.author;
    let tags = req.body.tags;

    const quote = await new Quotes({
      content: content,
      author: author,
      tags: tags,
      length: content.length,
    }).save();

    for (let i in tags) {
      const checkTag = await Tags.findOne({ name: tags[i] }); // If name already exists, then not save

      if (!checkTag) {
        const tag = await new Tags({
          name: tags[i],
        });
        tag.save();
      }
    }

    const checkAuthor = await Author.findOne({ _id: author._id }); // If id author already exists, then not save
    if (!checkAuthor) {
      const authors = await new Author({
        _id: author._id,
        name: author.name,
      });
      return authors.save();
    }

    res.send({ quote });
  } catch (error) {
    return res.send(new Error.BadRequest());
  }
};

module.exports = addQuote;
