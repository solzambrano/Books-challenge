
const handlerLogin =(req,res,next)=>{
    res.locals.isLogged=false;
    if(req.session && req.session.user){
            res.locals.userLogged=req.session.user.Name
        if(req.session.user.CategoryId=='1'){
            console.log('usuario logueado');
            res.locals.isLogged=true
        }
    }
next()
}

module.exports=handlerLogin