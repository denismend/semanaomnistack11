const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(13).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    }),
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), IncidentController.delete);

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