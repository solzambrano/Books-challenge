const { validationResult } = require('express-validator');

const errorHandler = (viewToRender)=>(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render(viewToRender,
        ({ errors: errors.mapped() ,
        oldData:req.body}));
    }
    next();
};

module.exports = errorHandler;
