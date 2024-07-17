const express=require('express');
const router=express.Router();
const bookController=require('../controllers/bookController')

router.get('/',bookController.listBook)
router.get('/books/detail/:id',bookController.detailBook)
router.get('/books/search',bookController.searchBook)
router.get('/books/create',bookController.createBook)

router.get('/books/edit/:id',bookController.updateBook)
router.put('/books/edit/:id',bookController.processUpdateBook)

router.delete('/books/edit/:id',bookController.deleteBook)

router.post('/books/search',bookController.processSearchBook)
router.post('/books/create',bookController.processCreateBook)


module.exports=router