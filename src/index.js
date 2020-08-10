const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

// //Mensagem que aparece no browser
// server.get('/teste', (req, res) => {
//     res.send('Mudei a API!');
// });

//Mensagem que aparece ao iniciar o servidor
server.listen(3333, () => {
    console.log("API online");
});