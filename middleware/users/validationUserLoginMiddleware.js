
const db = require('../../database/models');
const bcryptjs = require("bcryptjs");

const validationDataUser = (req, res, next) => {
       db.User.findOne({
            where: { email: req.body.email }
        })
        .then((user)=>{
            if (!user){
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
           }else{
            req.session.userPassword=userRegister
           }
            }
            next();
        }).catch(err=> console.log(err));
        
};

module.exports = validationDataUser;