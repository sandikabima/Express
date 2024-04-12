const pool = require('./conn')

const createCostumers = `CREATE TABLE IF NOT EXISTS "Costumers" (
    "Id" serial primary key,
    "Name" text,
    "Email" text,
    "Address" text,
    "City" text,
    "PostalCode" integer,
    "Country" text
);
`

const insertCostumer = ``

pool.query(createCostumers, (err , res) => {
    if (err) throw err
    console.log('Success create table costumers')
    
    pool.end()
})
