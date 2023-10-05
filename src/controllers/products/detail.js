const DB= require('../../database/models')

module.exports = (req,res) => {

    DB.Product.findByPk(req.params.id,{
        include: ['Images']
    })
    .then(product=> {
        return res.render('productDetail', {
            ...product.dataValues
        })
    }).catch(error => console.log(error))
    
}