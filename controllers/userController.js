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
           let userRegister= bcryptjs.compareSync(req.body.password,user.Pass);
           req.session.userPassword=userRegister
            if (userRegister) {
                req.session.user = user;
                res.cookie('user', user.name, { maxAge: 1000 });
                res.redirect('/')
            }
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
        }).catch(err=>console.log('err register:',err))
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    },
    logout: function (req, res) {
		res.clearCookie("user");
		req.session.destroy();
		return res.redirect("/");
	},

}

module.exports=userController