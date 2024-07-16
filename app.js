const express = require('express');

const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');


const home=require('./routes/routesBook')

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});


//rutas

app.use('/',home)

app.use(((req,res,next)=>{
    res.status(404).render('not-found')
}))
