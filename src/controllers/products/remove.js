const DB = require('../../database/models')

module.exports = (req,res) => {

    DB.Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(()=> {
        return res.redirect('/admin')
    })
    .catch(error => console.log(error))
  
}