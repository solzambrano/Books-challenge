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
            if (req.session.userPassword) {
                req.session.user = user;
                console.log('MIRAAAAAAAAAAAAA',user);
                res.cookie('user', user.Name, { maxAge: 1000 });
                res.redirect('/books')
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
        }).then(user=>{
            res.redirect('/books')
        }).catch(err=>console.log('err register:',err))
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    },
    logout: (req, res)=> {
		res.clearCookie("user");
		req.session.destroy();
		return res.redirect("/books");
	},

}

module.exports=userController