const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    
    return response.json( ongs ); 
});

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body; // body

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    //return response.send('Hello World !');
    return response.json({ id });
});


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