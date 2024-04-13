const costumers = require('../models/Costumers')

class Controller {

    static list(req, res){
        costumers.readAll((err, data)=>{
            if (err) throw err
            res.render('costumerList', {costumers : data})
        })
    }
}

module.exports = Controller