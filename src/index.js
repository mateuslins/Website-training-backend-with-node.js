const express = require('express');
const server = express();

//Mensagem que aparece no browser
server.get('/teste', (req, res) => {
    res.send('Mudei a API!');
});

//Mensagem que aparece ao iniciar o servidor
server.listen(3000, () => {
    console.log("API online");
});