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
            console.log('no book');
            
            book= await db.Book.create({
                title:req.body.title,
                cover:req.body.cover,
                description:req.body.description
        })
        }
        if(!author){     
             console.log('no author');
            author= await db.Author.create({
                name:req.body.author,
                country:req.body.country
        })
        }
         if (book && book.id){
            console.log('entre al if de libro');
            
            await book.addAuthor(author)
         }
          if(author && author.id) {
            console.log('entre al if de author');
            author.addBook(book)
        } 
            res.redirect('/books');
    },

}
module.exports=bookAuthorController