const express=require('express');
const router=express.Router();
const errorMiddleware=require('../middleware/errorMiddleware');
const validationCategoryUser=require('../middleware/validationCategoryMiddleware');
const checkUser=require('../middleware/checkUserMiddleware')
const userController=require('../controllers/userController')

router.get('/login',userController.login)
router.get('/register',userController.register)
router.post('/login',errorMiddleware('login'),userController.processLogin)
router.post('/register',checkUser,errorMiddleware('register'),userController.processRegister)



module.exports=router