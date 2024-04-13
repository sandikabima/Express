const costumers = require('../models/Costumers')

class Controller {

    static list(req, res){
        costumers.readAll((err, data)=>{
            if (err) throw err
            res.send(data)
        })
    }
}

module.exports = Controller