'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    categories: {
      type: Object,
      required: true,
      ref: 'categories',
    },
    length: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('quotes', quotesSchema)
