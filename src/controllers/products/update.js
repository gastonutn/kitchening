const { unlinkSync, existsSync } = require("fs");
const { validationResult } = require("express-validator");
const DB = require('../../database/models')

module.exports = (req, res) => {
  const errors = validationResult(req);
  

  if (errors.isEmpty()) {
    const { title, price, categoryId, discount, description, sectionId } = req.body;

    DB.Product.findByPk(req.params.id,{
      include:['images']
    })
    .then(product => {
      DB.Product.update({
        title: title.trim(),
        price,
        discount,
        description: description.trim(),
        categoryId,
        sectionId
      },{
        where:{
        id:req.params.id
        }
      }).then(() => {
        //cambiar imagen principal
        if(req.files.image){
          existsSync(`./public/img/products/${product.images.find(image => image.main).file}`) &&
          unlinkSync(`./public/img/products/${product.images.find(image => image.main).file}`);
          DB.Images.destroy({
            where : {
              productId : req.params.id,
              main : true
            }
          })
            .then(() => {
              DB.Image.create({
                file : req.files.image[0].filename,
                main : true,
                productId : req.params.id
              })
            })
        }
        if(req.files.images){
          product.images.filter(image => !image.main).forEach((image)=>{
            existsSync(`./public/img/products/${image.file}`) && 
            unlinkSync(`./public/img/products/${image.file}`)
          
          });
          
          DB.Images.destroy({
            where:{
              productId: req.params.id,
              main: false
            }
          }).then(()=> {
            const images = req.files.images.map(({filename}) => {
              return {
                  file:filename ,
                  main:false,
                  productId: product.id
              }
          })
          DB.Images.bulkCreate(images,{
              validate : true
          }).then(result=> console.log(result))
          })
        }
        return res.redirect("/admin")
      }).catch(error=> console.log(error))
     
    })

  } else {  const id = req.params.id;

    const product = DB.Product.findByPk(id,{
        include: {
            all: true
        }
    });
    const categories = DB.category.findAll({
        order : ['name']
    });
    const sections = DB.section.findAll({
        order : ['name']
    });

    Promise.all([product, categories, sections])
        .then(([product, categories, sections]) => {
            return res.render('productEdit',{
                categories,
                sections,
                ...product.dataValues,
                errors: errors.mapped()
            })
        }).catch(error=> console.log(error))
  }
};
