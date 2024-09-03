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
    searchBook:(req,res)=>{
        res.render('search')
    },
    createBook:(req,res)=>{
        db.Author.findAll({
            order:[['name','ASC']]
        })
        .then(authors=>{
        res.render('create',{authors})
        }). catch(err =>console.log(err))
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
       .then(book => {
        book[0]==1 ? res.redirect('/books'): res.status(404).send('Book not found');
        })
        .catch(err=>console.log(err))
    },
    processSearchBook:(req,res)=>{
       db.Book.findAll({
        include: [{ association: 'authors' }],
        where: {
            title: {
                [db.Sequelize.Op.like]: '%'+req.body.title+'%'
            }
        },
    }).then(books => {
        res.render('search', { books })
    }).catch(err=>console.log(err))
    },
    inputAuthor:(req,res)=>{
        res.render('partials/formCreate')
    },
    deleteBook:async (req,res)=>{
        const book= await db.Book.findByPk(req.params.id)
        if (book) {
            await db.sequelize.models.BooksAuthors.destroy({
                where: { BookId: req.params.id }
            });
        await db.Book.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/books');
        }
    }
}

module.exports=bookController