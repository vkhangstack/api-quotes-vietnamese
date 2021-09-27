'use strict';

const express = require('express');
const router = express.Router();
const addAuthor = require('../controller/authors/addAuthor');
const getAuthorById = require('../controller/authors/getAuthorById');

router.post('/author', async (req, res) => {
  try {
    let id = req.body.id;
    let name = req.body.name;
    let bio = req.body.bio || null;
    let link = req.body.link || null;
    let description = req.body.description || null;
    let quoteCount = req.body.quoteCount || null;

    const author = await addAuthor.addAuthor(
      id,
      name,
      bio,
      link,
      description,
      quoteCount
    );
    if (!id || !name)
      return res.send({ status: 404, message: 'ID && Name not null' });
    res.send(author);
  } catch (error) {
    return res.send({ status: 404, message: 'Bad request', error });
  }
});

router.get('/author/:id', async (req, res) => {
  try {
    let id = req.params.id;
    const author = await getAuthorById.getAuthorById(id);
    if (!author) return res.send({ status: 404, message: 'Author not found' });
    res.send(author);
  } catch (error) {
    return res.send({ status: 404, message: 'Bad request', error });
  }
});

module.exports = router;
