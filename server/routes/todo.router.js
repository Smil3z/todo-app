const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('GET todolist');
    let queryText = 'SELECT * FROM "todolist" ORDER BY "task";';
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
router.post('/', (req,res) => {
    const todo = req.body;
    const sqlText = `INSERT INTO todolist (task, completed)
                    VALUES ($1, $2)`;
    
    pool.query(sqlText, [todo.task, todo.completed])
        .then((result) => {
            console.log(`added task to database`, todo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error with database query ${sqlText}`, error);
            res.sendStatus(500);
        })
});
// PUT
router.put('/:id', (req, res) => {
    console.log('PUT /todolist', req.params, req.body);
    let queryText =`
        UPDATE "todolist" SET "completed" = true
        WHERE "id"
    `;
    pool.query(queryText, [req.body.completed])
    .then((result) => {
        res.sendStatus(200);
    }) .catch((error) => {
        console.log('error in PUT /todolist', error)
        res.sendStatus(500);
    });
});
// DELETE
router.delete('/:id', (req, res) => {
    console.log('req.params', req.params);
    let queryText = 'DELETE FROM "todolist" where "id" = $1';
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Something wrong with DELETE', error);
            res.sendStatus(500);
        });
});

module.exports = router;
