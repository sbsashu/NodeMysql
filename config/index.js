require('dotenv').config();
module.exports = {
    db_name: process.env.db_name,
    db_pass: process.env.db_pass,
    db_user: process.env.db_user
}