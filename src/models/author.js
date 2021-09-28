'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    quoteCount: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Author', authorSchema);
