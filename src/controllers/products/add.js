const DB = require('../../database/models')

module.exports = (req,res) => {

    const categories = DB.category.findAll({
        order: ['name']
    });

    const sections = DB.section.findAll({
        order: ['name']
    });

    Promise.all([categories,sections])
    .then(([categories,sections]) => {
        return res.render('productAdd',{
            categories,
            sections 
        })
    })
    .catch(error => console.log(error))
    
}