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
}

module.exports = Costumers