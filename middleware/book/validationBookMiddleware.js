
const db = require('../../database/models');
const {Sequelize } = require('sequelize');
const { validationResult } = require('express-validator');

const bookVerification = async (req, res, next) => {
     const normalizedTitle = req.body.title.trim().toLowerCase();
     const errors =await validationResult(req);
     const authors= await db.Author.findAll({
            order:[['name','ASC']]
     })
     if (!errors.isEmpty()) {
        return res.render('create',
        ({ errors: errors.mapped() ,
        oldData:req.body,
        authors}));
    }else{
        const book=await db.Book.findOne({
            where: Sequelize.where(
                    Sequelize.fn('LOWER', Sequelize.col('Title')),
                    normalizedTitle
                ) 
        })
        if(book){
                return res.render('create', {
		            errors: {
		            title: {msg: 'This book is already exists'}
				            },
			        oldData: req.body,
                    authors
			        });
           }else {
            next();
            };
    }
}

module.exports = bookVerification;