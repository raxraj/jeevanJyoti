const express = require('express')

const router = express.Router();

const authCheckers = require('../authFunctions')

const checkAuthenticated = authCheckers.checkAuthenticated;

router.get('/dashboard',checkAuthenticated, (req,res)=>{
    res.render('index.ejs')
})
router.get('/addChild',checkAuthenticated, (req,res)=>{
    res.render('addChild.ejs')
})
router.get('/searchChild',checkAuthenticated,(req,res)=>{
    res.render('searchChild.ejs')
})
router.get('/sendMessagesPage',checkAuthenticated, (req,res)=>{
    res.render('sendMessages.ejs')
})

module.exports = router;