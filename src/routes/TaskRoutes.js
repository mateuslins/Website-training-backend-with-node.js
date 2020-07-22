const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

//Se receber um comando /task, chama a função create do TaskController
//Como no index ele só é chamado ao receber o comando /task, aqui só precisa deixar um comando /
router.post('/', TaskController.create);

module.exports = router;