const costumers = require('../models/Costumers')

class Controller {

    static list(req, res){
        costumers.readAll((err, data)=>{
            if (err) throw err
            res.render('costumerList', {costumers : data})
        })
    }

    static addCostumersForm(req, res){
        res.render('costumerAddFrom')
    }

    static addCostumers(req, res){
        const newCostumers = {
            name : req.body.name,
            email : req.body.email,
            address : req.body.address,
            city : req.body.city,
            postalcode : req.body.postalcode,
            country : req.body.country,
        }

        costumers.create(newCostumers, (err, data)=>{
            if (err) throw err
            res.redirect('/costumers/list')
        })
        
    }

    static deleteCostumers(req, res){
       let id = req.params.id
       costumers.delete(id)
       res.redirect('/costumers/list')
    }

}

module.exports = Controller