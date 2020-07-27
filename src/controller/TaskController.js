const TaskModel = require('../model/TaskModel');
const { response } = require('express');

class TaskController {

    async create(req, res) {
        //task vai receber todos os valores de TaskModel, como um objeto
        const task = new TaskModel(req.body);

        await task.save() //Tenta salvar na base de dados
            .then(response => {
                return res.status(200).json(response);
            }) //Se tudo der certo
            .catch(error => {
                return res.status(500).json(error);
            }) //Se der errado
    }

    async update(req, res) {
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true }) //new true para devolver no response a tarefa atualizada
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async all(req, res) {
        await TaskModel.find({ macaddress: { '$in': req.body.macaddress } })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async show(req, res) {
        await TaskModel.findById(req.params.id)
            .then(response => {
                if (response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({ error: 'Tarefa não encontrada!' });
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

}

module.exports = new TaskController();