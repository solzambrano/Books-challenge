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
    detailAuthor:(req,res)=>{
        db.Author.findByPk(req.params.id,{
             include:[{association:'books'}]
        })
        .then(authorBooks=>{
            res.render('authorBooks',{authorBooks})
        })
        .catch(err=>console.log(err))
    },
}

module.exports=authorController