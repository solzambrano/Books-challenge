
const db = require('../../database/models');
const { validationResult } = require('express-validator');
const {Sequelize } = require('sequelize');

const validationCreate = async (req, res, next) => {
    console.log('entre al midd',req.body);
    
    const normalizedName = req.body.author.trim().toLowerCase();
    const errors =await validationResult(req);    
    const book= await db.Book.findAll({
                include: [{
                model: db.Author,
                as: 'authors',
                required: false,
                attributes: []
                }],
                where: {'$Authors.id$': null},
                order: [['title', 'ASC']]
            })           
    if (!errors.isEmpty()) {
        return res.render('createAuthor',
        ({ errors: errors.mapped() ,
        oldData:req.body,
        book}));
    }
    else{
        const author= await db.Author.findOne({
           where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('name')),
                normalizedName
                )
        })
        if(author){
            return res.render('createAuthor', {
				        errors: {
				        author: {
				            msg: 'This book is already exists'
					            }
				            },
			            oldData: req.body,
                        book
			        });
        }else{
            next();
        }
    }

}

module.exports = validationCreate;