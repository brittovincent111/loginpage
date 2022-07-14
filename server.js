const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const cookie = require('cookie-parser');
const {v4:uuidv4} = require("uuid");
const flash = require('connect-flash')

const router = require("./router");


const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(flash());


app.set('view engine', 'ejs');


//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use((req, res, next) => {
    if (!req.user) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
        res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
        res.setHeader("Expires", "0"); // Proxies.
    }
    next();
});

const maxAge = 24*60*60*1000;
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
    cookie :{maxAge : maxAge}
}))


app.use('/',router);

// home rout
app.get('/', (req, res)=>{
    if (req.session.user) {
        res.redirect('/dashboard');
    }else{
        const message=req.flash('msg')
        res.render('base',{message});
    }
})



 
app.listen(port, ()=>{
    console.log("Listen to the server http://localhost:3000");
})