const mongoose=require('mongoose');
const settings = require('./settings');
//conexión a la base de datos MongoDB CounterDB
mongoose.connect(`mongodb://localhost:27017/${settings.bbdd_name}`, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log("conexión establecida con éxito"))
    .catch(err => console.log("error al intentar conectar con mongodb " + err))

module.exports = mongoose;