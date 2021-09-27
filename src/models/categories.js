'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cateSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('categories', cateSchema)
