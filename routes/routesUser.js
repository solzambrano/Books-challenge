const express=require('express');
const router=express.Router();
const errorMiddleware=require('../middleware/users/errorMiddleware');
const validationUser=require('../middleware/users/validationUserLoginMiddleware')
const handlerLogin=require('../middleware/users/validationCategoryMiddleware');
const checkUser=require('../middleware/users/checkUserMiddleware');
const validationLogin=require('../middleware/users/validationLoginMiddleware');
const validationRegister=require('../middleware/users/validationRegisterMiddleware');
const userController=require('../controllers/userController')

router.get('/login',userController.login)
router.get('/register',userController.register)
router.get("/logout", userController.logout);
router.post('/login',validationUser,validationLogin,errorMiddleware('login'),handlerLogin,userController.processLogin)
router.post('/register',checkUser,validationRegister,errorMiddleware('register'),userController.processRegister)



module.exports=router