const pool = require('./conn')
const fs = require('fs')

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

let insertCostumer = `INSERT INTO "Costumers" ("Name","Email","Address","City","PostalCode","Country") VALUES`

fs.readFile('./costumers.json', 'utf8' , (err, data)=>{
    if (err) throw err
    data = JSON.parse(data)
    data.map((e, i)=>{
        insertCostumer += `('${e.CustomerName}','${e.Email}','${e.Address}','${e.City}','${e.PostalCode}','${e.Country}')`
        if (i === data.length - 1) insertCostumer += ';'
        else {
            insertCostumer += ','
        }
    })

    pool.query(createCostumers, (err , res) => {
        if (err) throw err
        console.log('Success create table costumers')
        pool.query(insertCostumer , (err, res)=> {
            if (err) throw err
            console.log('berhasil')
            pool.end()
        })
    })
})



