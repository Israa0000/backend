const express = require('express');
const betterSquilite3 = require('better-sqlite3')
const fs = require('fs')
const path = require('path')

const port = 3000;
const app = express();

const db = betterSquilite3('database.db')

const initSqlPath = path.join(__dirname, 'init.sql')
const initSql = fs.readFileSync(initSqlPath, 'utf8') // utf8 caracteres de europa
db.exec(initSql)
const query = db.prepare("SELECT * FROM users")
const users = query.all()
console.log(users[0].name)
//console.log(users[0].["name"])


app.get ('/', (req,res)=> { //request , respuesta
    res.json('Hola mundo')
})

//obtener lista de usuarios
app.get ("/users", (req, res) => {
    const query = db.prepare("SELECT * FROM users")
    const users = query.all()
    res.json(users)
})

//obtener key especifica
app.get ("/users/:id", (req, res) => {
    const id = req.params.id
    const query = db.prepare("SELECT id, name FROM users WHERE id = ?")
    const users = query.all(id)
    res.json(users)
})

app.post("/users", (req,res) => {
    const name = req.body.name
    const password = req.body.password
    //const query = db.exec("INSERT INTO name, password VALUES ?,? ")
    query.run(name,password)
})


app.listen(port, () => {
    console.log('Servidor funcionando en el puerto 3000')
})