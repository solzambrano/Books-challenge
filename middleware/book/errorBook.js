const {body}=require('express-validator');

let validationBook=[
    body('title')
    .notEmpty().withMessage('This field must be complete').bail()
    .matches(/^[A-Za-z.\s]+$/).withMessage('Only letters, spaces, and periods are allowed'),
     body('cover')
     .isURL().withMessage('Debe ingresar una URL válida'),
     body('description')
    .isLength({ max: 10 }).withMessage('cantidad de caracteres excedida')
    .isAlpha().withMessage('only letters'),
]

module.exports=validationBook;