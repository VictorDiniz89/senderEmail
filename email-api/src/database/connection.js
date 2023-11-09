let knex = require('knex') ({
    client: 'mysql',

    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'senderemail'
 
    }
})

module.exports = knex