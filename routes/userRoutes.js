const express = require('express')

const router = express.Router();

router.get('/dashboard',(req,res)=>{
    res.render('index.ejs')
})
router.get('/addChild',(req,res)=>{
    res.render('addChild.ejs')
})
router.get('/searchChild',(req,res)=>{
    res.render('searchChild.ejs')
})
router.get('/sendMessagesPage',(req,res)=>{
    res.render('sendMessages.ejs')
})

module.exports = router;