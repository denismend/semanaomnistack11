const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/** 
 * Rota / Recurso
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo de interrogação. (filtros, paginação ...) ?page=20
 * Route Params: Parâmetros utilizados para identificar recursos. /:id  
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySql, 'SqLite', Postgres, Oracle ..
 * NOSql: MongoDB, CouchDB, ...
 */

/** 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() ..
 */ 

app.listen(3333);

