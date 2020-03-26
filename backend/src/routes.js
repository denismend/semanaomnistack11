const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

/*
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
}); */

module.exports = routes;