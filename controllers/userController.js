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
    });
},
    register:(req,res)=>res.render('register'),
    processRegister:async (req,res)=>{
        const user= await db.User.create({
            Name:req.body.name,
            Email:req.body.email,
            Country:req.body.country,
            Pass:bcryptjs.hashSync(req.body.password, 10),
            CategoryId:req.body.category
        })
        if(user){
            res.redirect('/books')
        }else{
            res.send('404')
        }
    },
    logout: (req, res)=> {
		res.clearCookie("user");
		req.session.destroy();
		return res.redirect("/books");
	},

}

module.exports=userController