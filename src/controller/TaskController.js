const TaskModel = require('../model/TaskModel');
const { response } = require('express');

class TaskController {

    async create(req, res) {
        //task vai receber todos os valores de TaskModel, como um objeto
        const task = new TaskModel(req.body);
        await task
            .save() //Tenta salvar na base de dados
            .then(response => {
                return res.status(200).json(response);
            }) //Se tudo der certo
            .catch(error => {
                return res.status(500).json(error);
            }) //Se der errado
    }

}

module.exports = new TaskController();