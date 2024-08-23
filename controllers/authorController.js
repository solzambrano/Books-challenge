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
    select:async (req,res)=>{
        let book= await authorController.bookWithoutAuthor()
        res.render('partials/select',{book})
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
    bookWithoutAuthor:async ()=>{
        return await db.Book.findAll({
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
    })
    },
    createAuthor:async(req,res)=>{
       let book= await authorController.bookWithoutAuthor()
            res.render('createAuthor',{book})
    },
    processDelete:async(req,res)=>{
        const author=await db.Author.findByPk(req.params.id);
        console.log('autor',author)
        if(author){
             await db.sequelize.models.BooksAuthors.destroy({
                where: { AuthorId: req.params.id }
            });
            await db.Author.destroy({
                where:{id:req.params.id}
            });
        res.redirect('/authors');
        }
    }
}

module.exports=authorController