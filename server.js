require('dotenv').config();
require('./database/index')
require('./database/schema/index')
const express = require('express');
const morgan = require('morgan')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const { getHomePage } = require('./routes');
const { addPlayer,addPlayerPage, deletePlayer, editPlayer, editPlayerPage } = require('./routes/player');
const server = express();
server.use(express.json({}))
server.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))
//Middleware
server.set('port', process.env.PORT || 4004);
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json({}));
server.use(express.static(path.join(__dirname, 'public')));
server.use(fileUpload());
server.set('views', __dirname + '/views');
//routes for app
server.get('/', getHomePage);
server.get('/add', addPlayerPage);
server.get('/edit/:id', editPlayerPage);
server.get('/delete/:id', deletePlayer);
server.post('/add', addPlayer);
server.post('/edit/:id', editPlayer);

server.get('/', getHomePage);
server.get('/add', addPlayerPage);
server.get('edit/:id', editPlayerPage);
server.get('delete/:id', deletePlayer);
server.post('/add', addPlayer)
server.post('/edit/:id', editPlayer);

server.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT)
})