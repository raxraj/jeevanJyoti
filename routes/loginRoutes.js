var express = require('express')
var router = express.Router();


router.post('/login' , (req,res)=>{
    res.redirect('/user/dashboard')
})



//EXPORT THE ROUTES
module.exports = router;