const express=require('express');
const router=express.Router();
const bookVerification=require('../middleware/book/validationBookMiddleware')
const bookController=require('../controllers/bookController')
const commonController= require('../controllers/bookAuthorController')

router.get('/',bookController.listBook)
router.get('/detail/:id',bookController.detailBook)
router.get('/search',bookController.searchBook)
router.get('/create',bookController.createBook)

router.get('/edit/:id',bookController.updateBook)
router.put('/edit/:id',bookController.processUpdateBook)

router.delete('/edit/:id',bookController.deleteBook)

router.post('/search',bookController.processSearchBook)
router.get('/input',bookController.inputAuthor)
router.post('/create',bookVerification,commonController.processCreate)


module.exports=router