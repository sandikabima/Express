const {Pool} = require('pg')

const pool = new Pool({
    user : 'postgres', 
    host : 'localhost', 
    database : 'Store', 
    password : 'sandi', 
    port : 5432
})



module.exports = pool