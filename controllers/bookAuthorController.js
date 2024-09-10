const { ExclusionConstraintError } = require('sequelize');
let db = require('../database/models');

const bookAuthorController={
    checkExists:async (model,field,value)=>{ 
        return await model.findOne({
            where:{
                [field]:value
            }
        })
    },
    differentAuthor:(data)=>{
         let author = Array.isArray(data.author) ? data.author : (data.author ? [data.author] : []);
         data.nameAuthor!== 'Selected author' &&  data.nameAuthor!== undefined ? 
         author.push(data.nameAuthor):author
         return author
    },
    createModelAuthor:async(req,data)=>{  
       return await db.Author.create({
             name:data,
             country:req.body.country??''
                })
    },
    createModelBook:async(data)=>{
          return  await db.Book.create({
                     title:data.title,
                     cover:data.cover,
                     description:data.description
             })
    },
    processCreate: async(req,res)=>{   
        let authorModels=[];
        let bookModels=[];
       let newAuthor=bookAuthorController.differentAuthor(req.body)//junto el autor de select y el del input         
         if(newAuthor.length !==0){//si hay autores
            for(author of newAuthor){
                let authorModel=await bookAuthorController.checkExists(db.Author,'Name',author);//verifico s cada autor existe
            if(!authorModel){
                authorModel= await bookAuthorController.createModelAuthor(req,author)
            }
            authorModels.push(authorModel)
            }
         }    
         //esta parte es para la creacion de autores(1autor)
         if(req.body.title){
            let books=Array.isArray(req.body.title)?req.body.title:[req.body.title];
            if(books.length !==0){ 
                for(book of books){
                    let bookModel= await bookAuthorController.checkExists(db.Book,'title',book)
                    if(!bookModel){
                        bookModel=await bookAuthorController. createModelBook(req.body)  
                    }
                bookModels.push(bookModel)
                }// fin de for
            }
         }
        if(authorModels.length!=0 && bookModels.length != 0){
        for(authorModel of authorModels){
            for(bookModel of bookModels){
                await authorModel.addBook(bookModel)
                await bookModel.addAuthor(authorModel)
            }
        }
        }
    res.redirect('/books');
    }

}
module.exports=bookAuthorController