const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

//Se receber um comando /task, chama a função create do TaskController
//Como no index ele só é chamado ao receber o comando /task, aqui só precisa deixar um comando /
//Ao receber o comando respectivo, roda a validação em TaskValidation. Se tudo estiver certo, chama a função de criar na base de dados
router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskValidation, TaskController.update);
router.put('/:id/:done', TaskController.done);

router.delete('/:id', TaskController.delete);

router.get('/:id', TaskController.show);
router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);

module.exports = router;