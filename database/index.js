let config = require('../config/index');
let mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name
})

db.connect((err, res) =>{
    if(err) console.log(err)

    console.log('Database connected')
})

global.db = db;