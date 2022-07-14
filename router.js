var express = require('express');
var router = express.Router();

const credential = {
    email:"brittovincent123@gmail.com",
    password: "12345"
}

//login user
router.post('/',(req, res)=>{
    if(req.body.email == credential.email && req.body.password==credential.password){
        req.session.user = req.body.email;
        res.redirect('dashboard');
        console.log(req.body.email)
        // res.end("Login Sucessfull");
    }else{
        // res.end("Invalid Username  ")
        // res.redirect('/');
        req.flash('msg','Invalid user name or password')
        res.redirect('/')
    }
});

//Router for dashboard
router.get('/dashboard',(req, res)=>{
    if (req.session.user) {
        res.render('dashboard', {
              product: [
                 "https://images-eu.ssl-images-amazon.com/images/I/8147cwFm2PL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/71Cv6RqFF1L._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/51F+JlmyBjL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/51IsQHLroNL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/71T9JCLK9dL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/71WuDXpTAlL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/71hgzeX--TL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/6177wJ0CIrL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/71bnWlbwQ-L._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/81Ne5qKmE8L._AC_UL160_SR160,160_.jpg",
                 "https://images-eu.ssl-images-amazon.com/images/I/61LiK6CvJHL._AC_UL160_SR160,160_.jpg"
              ],
            });
    }
        
    // }else{
    //     // res.send("Unauthorized user");
    //     res.redirect('/')
    // }
}
)

//router for
router.get('/logout',(req, res)=>{
    res.send('msg',logout),
    req.session.destroy(function(err){
        if (err) {
            console.log(err);
            res.send("Error");
        }else{
            
            
            res.redirect('/')
        
            
        }
    })
})

module.exports=router;