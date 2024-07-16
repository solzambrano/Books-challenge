const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homeController')

router.get('/',homeController.listBook)
router.get('/books/detail/:id',homeController.detailBook)

router.get('/books/edit/:id',homeController.updateBook)
router.put('/books/edit/:id',homeController.processUpdateBook)

module.exports=router