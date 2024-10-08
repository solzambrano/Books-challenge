const express=require('express');
const router=express.Router();
const bookVerification=require('../middleware/book/validationBookMiddleware')
const bookController=require('../controllers/bookController');
const commonController= require('../controllers/bookAuthorController');
const validationBook=require('../middleware/book/errorBook');
const validationUserRegister= require('../middleware/validationRoutes')

router.get('/',bookController.listBook)
router.get('/detail/:id',bookController.detailBook)
router.get('/search',bookController.searchBook)
router.get('/create',validationUserRegister,bookController.createBook)

router.get('/edit/:id',bookController.updateBook)
router.put('/edit/:id',bookController.processUpdateBook)

router.delete('/edit/:id',bookController.deleteBook)

router.post('/search',bookController.processSearchBook)
router.get('/input',bookController.inputAuthor)
router.get('/link/author',bookController.selectBook)
router.post('/create',validationBook,bookVerification,validationUserRegister,commonController.processCreate)
router.get('/link/author/:id',bookController.linkAuthor)
router.post('/link/author',commonController.processCreate)

module.exports=router