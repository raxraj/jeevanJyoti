const express = require('express')

const router = express.Router();

const authCheckers = require('../authFunctions')

const checkAuthenticated = authCheckers.checkAuthenticated;
const checkUnAuthenticated = authCheckers.checkUnAuthenticated;

router.get('/dashboard', checkAuthenticated, (req, res) => {
    res.render('index.ejs', {doctor_id: req.user.doctor_id})
})

router.get('/addChild', checkAuthenticated, (req, res) => {
    res.render('addChild.ejs', {doctor_id: req.user.doctor_id})
})

router.get('/searchChild', checkAuthenticated, (req, res) => {
    res.render('searchChild.ejs', {doctor_id: req.user.doctor_id})
})

router.get('/sendMessagesPage', checkAuthenticated, (req, res) => {
    res.render('sendMessages.ejs', {doctor_id: req.user.doctor_id})
})

module.exports = router;
