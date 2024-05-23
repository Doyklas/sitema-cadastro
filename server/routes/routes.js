// routes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./../db');

const salt = 10;

router.get('/', (req, res) => {
    return res.send('testando app');
});

// pega todos registros
router.get('/register', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching data from MySQL:", err);
            return res.status(500).json({ error: "Error fetching data from server" });
        }
        return res.json(results);
    });
});
// faz um registro
router.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?,?,?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ error: "Error hashing password" });
        }
        const values = [
            req.body.name,
            req.body.email,
            hash
        ];
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error inserting data into MySQL:", err);
                return res.status(500).json({ error: "Error inserting data into server" });
            }
            console.log("Insert successful");
            return res.json({ status: "Success" });
        });
    });
});



module.exports = router;
