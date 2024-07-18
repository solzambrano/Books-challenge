let db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController={
    login:(req,res)=> res.render('login'),
 processLogin: (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (user) {
            bycryptjs.CompareSync()
            if (user.pass === req.body.password) {
                req.session.user = user;
                res.cookie('user', user.name, { maxAge: 1000 });
                res.json({ success: true, message: 'Usuario encontrado' });
            } else {
                res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
            }
        } else {
            res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }
    })
    .catch(error => {
        console.error('Error en el login:', error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    });
},
    register:(req,res)=>res.render('register'),
    processRegister:(req,res)=>{
        db.User.create({
            Name:req.body.name,
            Email:req.body.email,
            Country:req.body.country,
            Pass:bcryptjs.hashSync(req.body.password, 10),
            CategoryId:req.body.category
        }).then((USER)=>{
         console.log('Datos recibidos:', USER);

            res.redirect('/')
            // res.json('exito')
        }).catch(err=>console.log(err))
    }

}

module.exports=userController