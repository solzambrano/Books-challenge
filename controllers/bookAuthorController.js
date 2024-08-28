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
    processCreate: async(req,res)=>{    
        let books=Array.isArray(req.body.title)?req.body.title:[req.body.title];
        let author=await bookAuthorController.checkExists(db.Author,'Name',req.body.author);
         if(!author){     
             console.log('no author');
            author= await db.Author.create({
                name:req.body.author,
                country:req.body.country
        })
        }
       for(book of books){
            let bookModel= await bookAuthorController.checkExists(db.Book,'title',book)
             if(!bookModel){
                bookModel= await db.Book.create({
                    title:req.body.title,
                    cover:req.body.cover,
                    description:req.body.description
                })
            }
            //la siguiente linea es para asociar al author,los id del/los libros
            author.addBook(bookModel)
        }
        //    if(author && author.id) {
        //         console.log('entre al if de author');
        //         books.forEach(book => {
        //             console.log('libro',book);
        //             author.addBook(book)
        //         });
        //  } 
            res.redirect('/books');
    },

}
module.exports=bookAuthorController