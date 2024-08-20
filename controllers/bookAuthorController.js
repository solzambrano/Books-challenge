let db = require('../database/models');

const bookAuthorController={
    checkExists:async (model,field,value)=>{
        console.log('parameters',model,field,value);
        
        return await model.findOne({
            where:{
                [field]:value
            }
        })
    },
    processCreate:async(req,res)=>{    
        console.log('mirameeeeeeeeeeeee',req.body);
           
        let author=await bookAuthorController.checkExists(db.Author,'Name',req.body.author)
        let book=await bookAuthorController.checkExists(db.Book,'title',req.body.title)
        
        if(!book){
            book= await db.Book.create({
                title:req.body.title,
                cover:req.body.cover,
                description:req.body.description
        })
        }
        if(!author){     
            author= await db.Author.create({
                name:req.body.authorNew,
                country:req.body.country
        })
        }
         if (book && book.id && author && author.id) {
            await book.addAuthor(author);
            res.redirect('/books');
        } else {
            res.status(404).send('No se pudo crear el libro o el autor');
        }
    },

}
module.exports=bookAuthorController