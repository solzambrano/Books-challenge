const {body}=require('express-validator');

let validationAuthor=[
    body('author')
    .notEmpty().withMessage('This field must be complete').bail()
    .matches(/^[A-Za-z.\s]+$/).withMessage('Only letters, spaces, and periods are allowed'),
     body('country')
    .isLength({ max: 10 }).withMessage('cantidad de caracteres excedida')
    .isAlpha().withMessage('only letters'),
]

module.exports=validationAuthor;