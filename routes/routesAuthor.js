const express=require('express');
const router=express.Router();
const authorController=require('../controllers/authorController');
const bookAuthorController=require('../controllers/bookAuthorController')

router.get('/',authorController.listAuthor)
router.get('/:id/books',authorController.detailAuthor)
router.get('/create',authorController.createAuthor)
router.get('/select',authorController.select)
router.post('/create',bookAuthorController.processCreate)
router.delete('/delete/:id',authorController.processDelete)

// router.post('/books/edit/:id',authorController.deleteeBook)


module.exports=router