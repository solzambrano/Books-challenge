const express=require('express');
const router=express.Router();
const bookController=require('../controllers/bookController')

router.get('/',bookController.listBook)
router.get('/books/detail/:id',bookController.detailBook)

router.get('/books/edit/:id',bookController.updateBook)
router.put('/books/edit/:id',bookController.processUpdateBook)

router.post('/books/edit/:id',bookController.deleteeBook)


module.exports=router