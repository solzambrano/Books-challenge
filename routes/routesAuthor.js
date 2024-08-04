const express=require('express');
const router=express.Router();
const authorController=require('../controllers/authorController')

router.get('/',authorController.listAuthor)
router.get('/:id/books',authorController.detailAuthor)
router.get('/create',authorController.createAuthor)
// router.put('/books/edit/:id',authorController.processUpdateBook)

// router.post('/books/edit/:id',authorController.deleteeBook)


module.exports=router