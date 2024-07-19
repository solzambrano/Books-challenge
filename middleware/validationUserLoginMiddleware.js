
const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const validationDataUser = (req, res, next) => {
       db.User.findOne({
            where: { email: req.body.email }
        })
        .then((user)=>{
            if (!user){
                console.log('no lo encontre');
                  return res.render('login', {
				errors: {
					email: {
						msg: 'This email is not register'
					}
				},
				oldData: req.body
			});
            }else{
           let userRegister= bcryptjs.compareSync(req.body.password,user.Pass);
           if(!userRegister){
             return res.render('login', {
				errors: {
					pass: {
						msg: 'Pass wrong'
					}
				},
				oldData: req.body
			});
           }
            }
        }).catch(err=> console.log(err));
        next();
};

module.exports = validationDataUser;