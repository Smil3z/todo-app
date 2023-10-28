const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/TODOList', (req, res) => {
    let queryText = 'SELECT * FROM "TODOList" ORDER BY "Task";';
    pool.query(queryText)
        .then((result) => {
            console.log('GET successful');
            res.send(result.rows);
        }).catch ((error) => {
            console.log('error with GET', error);
            res.sendStatus(500);
        })
});

// POST

// PUT

// DELETE

module.exports = router;
