const DB = require('../../database/models')

module.exports = (req,res) => {

   
    const id = req.params.id;
    const product= DB.Product.findByPk(id,{
        include:{
             all: true
        }
    });
    const categories = DB.category.findAll({
        order:['name']
    });
    const sections = DB.section.findAll({
        order:['name']
    })

    Promise.all([product,categories,sections])
    .then(([product,categories,sections])=>{
        return res.render('productEdit',{
            categories,
            sections,
            ...product?.dataValues
        })
    }).catch(error=> console.log(error))
    
}