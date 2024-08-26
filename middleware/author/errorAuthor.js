const { validationResult } = require('express-validator');

const errorHandler = (req, res, next) => {
    console.log('aquiiiii',req.body)
     let author=req.params
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('editAuthor',
        ({ errors: errors.mapped() ,
        oldData:req.body,
        author}));
    }
    next();
};

module.exports = errorHandler;