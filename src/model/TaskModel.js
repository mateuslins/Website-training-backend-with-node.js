//Pega o mongoose do database e devolve já conectado
const mongoose = require('../config/database');
const { mongo } = require('../config/database');
const Schema = mongoose.Schema;

//Criando o objeto de Task pra ser armazenado no banco de dados
const TaskSchema = new Schema({
    macaddress: { type: String, required: true },
    type: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    when: { type: Date, required: true },
    done: { type: Boolean, default: false },
    created: { type: Date, default: Date.now() }
});

//Exporta o TaskSchema como um modelo do mongoose de nome Task
module.exports = mongoose.model('Task', TaskSchema);