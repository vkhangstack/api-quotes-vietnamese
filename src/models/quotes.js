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
      ref: 'Author',
    },
    tags: {
      type: Object,
      required: true,
      ref: 'Tags',
    },
    length: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Quotes', quotesSchema);
