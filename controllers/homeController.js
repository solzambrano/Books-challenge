let db = require('../database/models');

const homeController={
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
        db.Book.findByPk(req.params.id)
        .then(book=>{
            res.render('bookDetail',{book})
        })
    }
}

module.exports=homeController