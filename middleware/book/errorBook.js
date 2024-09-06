const {body}=require('express-validator');

let validationBook=[
    body('title')
    .notEmpty().withMessage('This field must be complete').bail()
    .matches(/^[A-Za-z.\s]+$/).withMessage('Only letters, spaces, and periods are allowed'),
     body('cover')
     .isURL().withMessage('You must enter a valid URL'),
     body('description')
    .isLength({ max: 300 }).withMessage('number of characters exceeded')
]

module.exports=validationBook;