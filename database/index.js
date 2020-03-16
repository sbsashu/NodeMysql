let config = require('../config/index');
let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name
})

con.connect(async (err, res) =>{
    if(err) console.log(err)

    console.log('Database connected')
})

module.exports = con;
