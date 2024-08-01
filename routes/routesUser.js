const express=require('express');
const router=express.Router();
const errorMiddleware=require('../middleware/errorMiddleware');
const validationUser=require('../middleware/validationUserLoginMiddleware')
const handlerLogin=require('../middleware/validationCategoryMiddleware');
const checkUser=require('../middleware/checkUserMiddleware');
const validationLogin=require('../middleware/validationLoginMiddleware');
const validationRegister=require('../middleware/validationRegisterMiddleware');
const userController=require('../controllers/userController')

router.get('/login',userController.login)
router.get('/register',userController.register)
router.get("/logout", userController.logout);
router.post('/login',validationUser,validationLogin,errorMiddleware('login'),handlerLogin,userController.processLogin)
router.post('/register',checkUser,validationRegister,errorMiddleware('register'),userController.processRegister)



module.exports=router