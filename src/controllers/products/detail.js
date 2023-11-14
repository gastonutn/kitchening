const DB= require('../../database/models')

module.exports = (req,res) => {

    DB.Product.findByPk(req.params.id,{
        include: ['images']
    })
    .then(product=> {
        return res.render('productDetail', {
            ...product.dataValues
        })
    }).catch(error => console.log(error))
    
}