//Importamos la conexion con mongo, para que cuando se lea este archivo se conecte con la base de datos automaticamente.
require('../config/mongoose');

var express = require('express');
var router = express.Router();

//Importamos el modelo para poderlo utilizar a la hora de manejar datos con mongo
const UserModel = require('../models/User');

/* GET users listing. */
router.get('/getAll', function (req, res, next) {
  UserModel.find({})
    .then(users => {
      res.send(users);
    })
});

module.exports = router;