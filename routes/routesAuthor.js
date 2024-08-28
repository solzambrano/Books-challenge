const express=require('express');
const router=express.Router();
const validationAuthor=require('../middleware/author/validationAuthor');
const errorMiddleware=require('../middleware/author/errorAuthor');
const authorController=require('../controllers/authorController');
const bookAuthorController=require('../controllers/bookAuthorController');
const validationAuthorCreate=require('../middleware/author/validationCreate')

router.get('/',authorController.listAuthor)
router.get('/:id/books',authorController.detailAuthor)
router.get('/create',authorController.createAuthor)
router.get('/select',authorController.select)
router.post('/create',validationAuthor,validationAuthorCreate,bookAuthorController.processCreate)
router.get('/edit/:id',authorController.edit)
router.put('/edit/:id',validationAuthor,errorMiddleware,authorController.updateAuthor)
router.delete('/delete/:id',authorController.processDelete)

// router.post('/books/edit/:id',authorController.deleteeBook)


module.exports=router