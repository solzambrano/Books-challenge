let db = require('../database/models');

const userController={
    login:(req,res)=> res.render('login'),
    processLogin:(req,res)=>{
    db.User.findAll({
         where: {
            email: {[db.Sequelize.Op.like]:req.body.email},
            pass: {[db.Sequelize.Op.like]:req.body.password},
        },
    })
    .then(user=> res.json('se encontro el usuario'))
    },
    register:(req,res)=>{
        res.render('register')
    }

}

module.exports=userController