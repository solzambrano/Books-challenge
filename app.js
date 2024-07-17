const express = require('express');
const method=require('method-override');

const app = express();
app.use(express.static('./public'))
//configuracion put y delete
app.use(method('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');


const home=require('./routes/routesBook');
const authors=require('./routes/routesAuthor')

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});


//rutas

app.use('/',home)
app.use('/authors',authors)

app.use(((req,res,next)=>{
    res.status(404).render('not-found')
}))
