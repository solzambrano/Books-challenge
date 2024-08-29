const {body}=require('express-validator');

let validation=[
    body('name')
    .notEmpty().withMessage('This field must be complete').bail()
    .matches(/^[A-Za-z.\s]+$/).withMessage('Only letters, spaces, and periods are allowed'),
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