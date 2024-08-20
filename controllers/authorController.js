let db = require('../database/models');

const authorController={
    listAuthor:(req,res)=>{
        db.Author.findAll({
        include:[{association:'books'}]
        })
        .then(authors => {
            res.render('authors',{authors})
        })
        .catch((err) => console.log(err));
    },
    select:(req,res)=>{
        res.render('partials/select')
    },
    detailAuthor:(req,res)=>{
        db.Author.findByPk(req.params.id,{
             include:[{association:'books'}]
        })
        .then(authorBooks=>{
            res.render('authorBooks',{authorBooks})
        })
        .catch(err=>console.log(err))
    },
    createAuthor:(req,res)=>{
        db.Book.findAll({
           include: [{
        model: db.Author,
        as: 'authors',
        required: false,
        attributes: []
    }],
    where: {
        '$Authors.id$': null
    },
    order: [['title', 'ASC']]
}).then(book=>{
            res.render('createAuthor',{book})
        }).catch(err=>console.log(err))
    }
}

module.exports=authorController