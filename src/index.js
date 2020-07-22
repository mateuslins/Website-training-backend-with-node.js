const express = require('express');
const server = express();
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

// //Mensagem que aparece no browser
// server.get('/teste', (req, res) => {
//     res.send('Mudei a API!');
// });

//Mensagem que aparece ao iniciar o servidor
server.listen(3000, () => {
    console.log("API online");
});