const pool = require('../conn')

class Costumers {
    constructor(id, name, email, address, city, postalcode, country){
        this.id = id
        this.name = name
        this.email = email
        this.address = address
        this.city = city
        this.postalcode = postalcode
        this.country = country
    }

    static readAll(callback){
        const query = `select * from "Costumers"`
        pool.query(query, (err, data)=>{
            if (err) {
                callback(err, null)
            }else{
                const result = data.rows
                const costumers = []
                result.map((e) =>{
                    costumers.push(new Costumers(e.Id, e.Name, e.Email, e.Address, e.City, e.PostalCode, e.Country))
                })
                callback(null, costumers)
            }
        })
    }

    static create(costumer, callback){

        const query = `insert into "Costumers" ("Name", "Email", "Address", "City", "PostalCode", "Country") values ('${costumer.name}','${costumer.email}','${costumer.address}','${costumer.city}','${costumer.postalcode}','${costumer.country}')`

        pool.query(query, (err, data)=>{
            if (err) callback(err, null)
            callback(null, data)

        })
    }

    static delete(id){

        const query = `DELETE FROM "Costumers" WHERE "Id" = ${id}`
        pool.query(query, (err, data) =>{
            if (err) throw err
        })
    }
}

module.exports = Costumers