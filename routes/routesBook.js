const express=require('express');
const router=express.Router();
const bookController=require('../controllers/bookController')

router.get('/',bookController.listBook)
router.get('/detail/:id',bookController.detailBook)
router.get('/search',bookController.searchBook)
router.get('/create',bookController.createBook)
router.post('/create/author',bookController.processCreateAuthor)

router.get('/edit/:id',bookController.updateBook)
router.put('/edit/:id',bookController.processUpdateBook)

router.delete('/edit/:id',bookController.deleteBook)

router.post('/search',bookController.processSearchBook)
router.post('/create',bookController.processCreateBook)


module.exports=router