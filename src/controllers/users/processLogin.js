const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")
const db = require('../../database/models')
module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        
        db.user.findOne({
            where: 
            {
                email: req.body.email
            }
        }). then(user => {
            req.session.userLogin = {
                id: isSecureContext.id,
                name: user.name,
                role: user.roleId
            }
            req.body.remember !== undefined && res.cookie('kitcheningUser4EVER',req.session.userLogin,{
                maxAge : 1000 * 60 * 5
            })
            return res.redirect('/')

        }).cacth((error)=> console.log(error))
    
  
        return res.redirect('/')
    }else {
        return res.send(errors.mapped())
}}

  