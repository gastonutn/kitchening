const DB = require('../database/models')

module.exports = {
    index : (req,res) => {   
        DB.Product.findAll({
            include: ['images']
        })
        .then(products => {
            return res.render('index', {
                
                products,
                productsCarousel: []
    
            })
        }).catch(error => console.log(error))

       
    },
    admin : (req,res)  => {

        const products= DB.Product.findAll({
            include:['category','section','images']
        })
        const categories= DB.category.findAll()
        const sections= DB.section.findAll()
        const users= DB.user.findAll()
        
        Promise.all([products,categories,sections,users])
            .then(([products,categories,sections,users]) => {
                return res.render('admin', {
                    products,
                    categories,
                    sections,
                    users
                })
            }).catch(error => console.log(error))
        
    }
}