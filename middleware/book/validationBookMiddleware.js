
const db = require('../../database/models');
const {Sequelize } = require('sequelize');

const bookVerification = (req, res, next) => {
     const normalizedTitle = req.body.title.trim().toLowerCase();
       db.Book.findOne({
               where: Sequelize.where(
                    Sequelize.fn('LOWER', Sequelize.col('Title')),
                    normalizedTitle
                )
        }).then(book =>{
            if(book){
                 return db.Author.findAll({
                    order:[['name','ASC']]
                    }).then(authors=>{
                        return res.render('create', {
				            errors: {
					            title: {
						            msg: 'This book is already exists'
					            }
				            },
				            oldData: req.body,
                            authors
			        });
                })
           }else {
            next();
        }
        }).catch(err=> console.log(err));
   
};

module.exports = bookVerification;