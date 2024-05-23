const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "banco"
});

app.get('/', (req, res)=>{
    return res.send('testando app')
}
)
app.post('/register', (req, res)=> {
    const sql = "INSERT INTO login (`name`, `email, `password`) VALUES (?,?,?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=> {
        if(err) return res.json({Error: "Error for hassing password"})
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, values, (err, result) => {
            if(err) return res.json({Error: "Inserting data Error in server"})
            return res.json({Status: "Success"})
        })
    })
    
})

app.listen(8081, ()=> {
    console.log("Running ...");

})