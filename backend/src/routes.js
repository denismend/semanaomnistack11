const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    //return response.send('Hello World !');
    return response.json( {
        evento: 'semanaonmistack 11.0',
        aluno: 'Denis Ladeira'
    } );
});

routes.get('/users/:id', (request, response) => {
    //const params = request.query; // query
    const params = request.params; // route params

    console.log(params);

    //return response.send('Hello World !');
    return response.json( {
        evento: 'semanaonmistack 11.0',
        aluno: 'Denis Ladeira'
    } );
});

routes.post('/users', (request, response) => {
    const body = request.body; // route params

    console.log(body);

    //return response.send('Hello World !');
    return response.json( {
        evento: 'semanaonmistack 11.0',
        aluno: 'Denis Ladeira',
        idade: 26
    } );
});

module.exports = routes;