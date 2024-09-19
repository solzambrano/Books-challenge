
const handlerLogin =(req,res,next)=>{
    res.locals.admin=false;//categoriia admin
    res.locals.user=false;
    if(req.session && req.session.user){
        res.locals.userLogged=req.session.user.Name
        req.session.user.CategoryId=='1'? res.locals.admin=true : res.locals.user=true
    }
    next()
}

module.exports=handlerLogin