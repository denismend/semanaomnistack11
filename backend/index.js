const express = require('express');

const app = express();

app.get('/', (request, response) => {
    //return response.send('Hello World !');
    return response.json( {
        evento: 'semanaonmistack 11.0',
        aluno: 'Denis Ladeira'
    } );
});

app.listen(3333);

