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
            console.log(authorBooks);
            res.render('authorBooks',{authorBooks})
        })
        .catch(err=>console.log(err))
    },
    // updateBook:(req,res)=>{
    //     db.Author.findByPk(req.params.id)
    //     .then(book=> res.render('editBook',{book}))
    // },
    // processUpdateBook:(req,res)=>{
    //     db.Author.update({
    //         title:req.body.title,
    //         cover:req.body.cover,
    //         description:req.body.description
    //     },
    //     {where:{id:req.params.id}}
    //     )
    //    .then((book) => {
    //     console.log(req.params.id);
    //     console.log(book[0]);
    //     if (book[0] === 1) {
    //         res.redirect('/');
    //     } else {
    //         res.status(404).send('Book not found');
    //      }
    //     })
    //     .catch(err=>console.log(err))
    // },
    // deleteBook:(req,res)=>{
    //     db.Author.destroy({
    //         where:{id:req.params.id}
    //     })
    // }
}

module.exports=authorController