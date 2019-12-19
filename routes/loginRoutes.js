var express = require('express')
var router = express.Router();


router.get('/about',(req,res)=>{
    res.send('THIS IS RESPONSE')
})



//EXPORT THE ROUTES
module.exports = router;