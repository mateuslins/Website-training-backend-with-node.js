const mongoose = require('mongoose');

//url para o banco de dados. Porta 27017 pertencente ao mongodb. Todo é o nome da base de dados
const url = 'mongodb://localhost:27017/todo';
mongoose.connect(url, { useNewUrlParser: true });

//Permite que o moongose seja exportado para outros arquivos já conectado
module.exports = mongoose;