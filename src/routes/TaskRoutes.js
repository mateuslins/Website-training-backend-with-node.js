const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

//Se receber um comando /task, chama a função create do TaskController
//Como no index ele só é chamado ao receber o comando /task, aqui só precisa deixar um comando /
//Ao receber o comando respectivo, roda a validação em TaskValidation. Se tudo estiver certo, chama a função de criar na base de dados
router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskController.update);

module.exports = router;