const path = require('path');
//para preguntar si tengo a alguien en session
const handlerLogin =(req,res,next)=>{
//     res.locals.isLogged=false;
//     console.log((res.locals.isLogged));
//     if(req.body.category==1){ //es admin
//     res.locals.isLogged=true

//     }else{
// console.log('nose');
//     }
    // if(req.session && !req.body.passwrd){
    //     console.log('entre aqui porque esta mal el pass');
    //      return res.render('login', {
	// 			errors: {
	// 				email: {
	// 					password: 'Wrong password'
	// 				}
	// 			},
	// 			oldData: req.body
	// 		});

    // }
    // if(req.session && !req.session.user){
    //     console.log('entre aqui porque esta mal el email');

    //      return res.render('login', {
	// 			errors: {
	// 				email: {
	// 					msg: 'wrong email'
	// 				}
	// 			},
	// 			oldData: req.body
	// 		});
    // }
// if(req.session && req.session.nombre){
//     res.locals.isLogged=true
//     res.locals.userLogged=req.session.nombre
// }
// if(req.body.remember){
//     let nameUser=req.cookies.user;
//     console.log(nameUser);
// if(nameUser){
//     req.session.nombre=nameUser;
//     res.locals.userLogged=nameUser
// }
// }

next()
}

module.exports=handlerLogin