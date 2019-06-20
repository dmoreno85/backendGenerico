//Importamos la conexion con mongo, para que cuando se lea este archivo se conecte con la base de datos automaticamente.
require('../config/mongoose');

var express = require('express');
var router = express.Router();

//Importamos el modelo para poderlo utilizar a la hora de manejar datos con mongo
const UserModel = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

//Registrar un nuevo usuario
router.post('/signup', function (req, res, next) {
  new UserModel({
      ...req.body,
      info: {
        //Anadimos el avatar por defecto
        avatar: `https://api.adorable.io/avatars/150/${req.body.email}`,
      }
    }).save()
    .then(user => {
      res.send(user);
    })
})

//Iniciar sesion con un usuario existente
router.post('/login', function (req, res, next) {

  UserModel.findOne({
      $or: [{
          "email": req.body.emailornick
        },
        {
          "nick": req.body.emailornick
        }
      ]
    })
    .then(user => {
      res.send(user);
    })
});

module.exports = router;