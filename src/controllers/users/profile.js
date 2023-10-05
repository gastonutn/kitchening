const DB = require('../../database/models')

module.exports = (req,res) => {

    DB.user.findByPk(req.session.userLogin.id)
    .then(user => {
        const birthday = new Date(user.birthday).toISOString();
        console.log(birthday.split('T')[0]);
        return res.render('profile',{
            ...user.dataValues,
            birthday: birthday.split('T')[0]
    })
    
    }).catch(errors => console.log(errors))
}