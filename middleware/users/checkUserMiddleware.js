
const db = require('../../database/models');

const checkEmailUser = (req, res, next) => {
       db.User.findOne({
            where: { email: req.body.email }
        })
        .then((user)=>{
            if (user){
                 return res.render('register', {
				errors: {
					email: {
						msg: 'This email is registered'
					}
				},
				oldData: req.body
			});
            }
        }).catch(err=> console.log(err));
        next();
   
};

module.exports = checkEmailUser;