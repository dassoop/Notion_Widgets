const express = require('express');
const path = require('path');

const publicDir = path.join(__dirname, '../../view');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(publicDir + '/html/index.html');
});

module.exports = router;