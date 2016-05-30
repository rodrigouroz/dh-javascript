'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var listaDeInvitados = require('./invitados');

app.use(cors());

app.get('/invitados', function (req, res, next) {
    res.status(200).json(listaDeInvitados);
});

app.listen(3000, function () {
  console.log('ya tenemos una API para nuestra aplicación');
});
