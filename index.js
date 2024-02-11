const express=require('express')
const handlebars=require('express-handlebars')
const mongoose=require('mongoose')
const routes=require('./routes')
const app=express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs')
app.use(routes)
//to change db name
mongoose.connect('mongodb://127.0.0.1:27017/course-book')
mongoose.connection.on('connected',()=>console.log('DB is connected'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(5000,console.log('Server listening on port 5000'))