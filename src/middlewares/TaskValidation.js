const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    
    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatório!' });
    
    else if (!type)
        return res.status(400).json({ error: 'tipo é obrigatório!' });

    else if (!title)
        return res.status(400).json({ error: 'título é obrigatório!' });

    else if (!description)
        return res.status(400).json({ error: 'descrição é obrigatória!' });

    else if (!when)
        return res.status(400).json({ error: 'data e hora são obrigatórios!' });

    else if (isPast(new Date(when)))
        return res.status(400).json({ error: 'escolha uma data e hora futura!' });
    
    else {
        //Validação para não deixar uma tarefa ser cadastrada numa mesma data e horário de outra já existente da mesma máquina
        let exists;

        //Verifica se já existe a tarefa no banco de dados, em caso de update
        //Em caso positivo, ele ignora o id que for igual para não aparecer a mensagem de erro
        if (req.params.id) {
            exists = await TaskModel.findOne({
                '_id': { '$ne': req.params.id },
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }
            });
        }

        else {
            exists = await TaskModel.findOne({
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }
            });
        }

        if (exists)
            return res.status(400).json({ error: 'já existe uma tarefa nesse dia e horário!' });

        next();
    }

}

module.exports = TaskValidation;