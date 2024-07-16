let db = require('../database/models');

const homeController={
    home:(req,res)=>{
        db.Book.findAll({
        include:[{association:'authors'}]
        })
        .then(books => {
            res.render('home',{books})
    })
        // res.render('home')
    }
}

module.exports=homeController