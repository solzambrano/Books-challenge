const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homeController')

router.get('/',homeController.listBook)
router.get('/books/detail/:id',homeController.detailBook)

module.exports=router