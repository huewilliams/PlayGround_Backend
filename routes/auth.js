const express = require('express');

const router = express.Router();

const connect = require('../db/connect')();
let connection = connect.init();
connect.open(connection);

router.get('/', (req, res)=>{
    connection.query('SELECT * FROM playground.User', (err, result)=>{
        if(err) {
            console.log(err);
            res.status(500).json({code: 500, message: 'server error'});
        } else {
            console.log(result);
            res.json(result);
        }
    })
});

module.exports = router;