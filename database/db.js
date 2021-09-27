'use strict';

const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      'mongodb://localhost/quotes-vietnamese',
      connectionParams,
    );
    console.log('Connect to mongodb successfully');
  } catch (error) {
    console.log('Could not connect to MongoDB');
  }
};
