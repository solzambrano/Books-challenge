const express = require('express');
const method=require('method-override');

const app = express();
const session =require('express-session');
const cookies =require('cookie-parser');
const categoryUser=require('./middleware/users/validationCategoryMiddleware')
app.use(express.static('./public'));
//configuracion put y delete
app.use(method('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(session({
  secret: 'tu_clave_secreta_aqui',
  resave: false,
  saveUninitialized: false,
}));
app.use(cookies());
 app.use(categoryUser)

const home=require('./routes/routesBook');
const authors=require('./routes/routesAuthor')
const user=require('./routes/routesUser')


app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});


//rutas

app.use('/books',home)
app.use('/authors',authors)
app.use('/users',user)

app.use(((req,res,next)=>{
    res.status(404).render('not-found')
}))
