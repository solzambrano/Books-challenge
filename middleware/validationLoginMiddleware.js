const {body}=require('express-validator');
const path =require('path')

let validation=[
    body('email')
    .notEmpty().withMessage('This field must be complete').bail()
    .isEmail().withMessage('It´s not an email'),
     body('password')
    .isLength({ max: 30 }).withMessage('cantidad de caracteres excedida'),
]

module.exports=validation;