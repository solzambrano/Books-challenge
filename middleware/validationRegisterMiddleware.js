const {body}=require('express-validator');

let validation=[
    body('name')
    .notEmpty().withMessage('This field must be complete').bail()
    .isAlpha().withMessage('only letters')
    .matches(/^\w+\s\w+$/).withMessage('The first and last name must be separated by a space'),
    body('email')
    .notEmpty().withMessage('This field must be complete').bail()
    .isEmail().withMessage('It´s not an email'),
    body('country')
    .notEmpty().withMessage('This field must be complete')
    .isLength({ max: 30 }).withMessage('cantidad de caracteres excedida'),
     body('password')
    .isLength({ max: 30 }).withMessage('cantidad de caracteres excedida'),
]

module.exports=validation;