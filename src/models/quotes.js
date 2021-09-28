'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quotesSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
      ref: 'author',
    },
    tags: {
      type: Array,
      required: true,
      ref: 'tags',
    },
    length: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Quotes', quotesSchema);
