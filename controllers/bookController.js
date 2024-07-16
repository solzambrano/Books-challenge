let db = require('../database/models');

const bookController={
    listBook:(req,res)=>{
        db.Book.findAll({
        include:[{association:'authors'}]
        })
        .then(books => {
            res.render('home',{books})
        })
        .catch((err) => console.log(err));
    },
    detailBook:(req,res)=>{
        db.Book.findByPk(req.params.id,{
             include:[{association:'authors'}]
        })
        .then(book=>{
            res.render('bookDetail',{book})
        })
        .catch(err=>console.log(err))
    },
    updateBook:(req,res)=>{
        db.Book.findByPk(req.params.id)
        .then(book=> res.render('editBook',{book}))
    },
    processUpdateBook:(req,res)=>{
        db.Book.update({
            title:req.body.title,
            cover:req.body.cover,
            description:req.body.description
        },
        {where:{id:req.params.id}}
        )
       .then((book) => {
        console.log(req.params.id);
        console.log(book[0]);
        if (book[0] === 1) {
            res.redirect('/');
        } else {
            res.status(404).send('Book not found');
         }
        })
        .catch(err=>console.log(err))
    },
    deleteBook:(req,res)=>{
        db.Book.destroy({
            where:{id:req.params.id}
        })
    }
}

module.exports=bookController