const { validationResult } = require('express-validator')
const DB= require('../../database/models')


module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name,surname,birthday} =req.body
        DB.user.update(
            {
                name: name.trim(),
                surname: surname.trim(),
                birthday
            },
            {
                where: {
                    id: req.session.userLogin.id
                }
            }).then(response=>{
                console.log(response);
                req.session.userLogin.name = name;
                res.locals.userLogin.name= name;

                if(req.cookies.kitcheningUser4EVER){
                    res.cookie('kitcheningUser4EVER',req.session.userLogin)
                }

                return res.redirect('/')
            }
                )
        
    }else {
        DB.user.findByPk(req.session.userLogin.id)
    .then(user => {
        return res.render('profile',{
            ...user.dataValues,
            errors : errors.mapped()
    })
    
    }).catch(errors => console.log(errors))
    }
}