'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tags', tagsSchema);
