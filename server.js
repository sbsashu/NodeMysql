require('dotenv').config();
require('./database/index')
require('./database/schema/index')
const express = require('express');
const server = express();


server.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT)
})