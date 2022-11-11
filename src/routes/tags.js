'use strict';

const express = require('express');
const router = express.Router();
const { addTag, getTags } = require('../controller/tags/index');

router.post('/', addTag);
router.get('/', getTags);

module.exports = router;
