const express = require("express");


const router = express.Router();
const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const sessionMiddleware = require(root('utils/middleware/session'))
const User = require('../../models/User')

router.use(sessionMiddleware())

router.use((req, res, next) => {
    if(req.cookies.user_session && !(req.session.user && req.session.user.id)){
        req.session.user_id = req.cookies.user_session
    }
    
    next()
})

router.post('/set', (req, res) => {
    for(var key in req.body){
        req.session[key] = req.body[key];
    }

    const session = {...req.session};
    delete session.cookie;

    if(session.user_id){
        res.cookie('user_session', session.user_id)
    }else{
        res.clearCookie('user_session')
    }

    req.session.save(() =>{
        res.json({session: session})
    })
    
});

router.post('/get', async (req, res) => {
    const session = {...req.session};
    delete session.cookie;

    if(!session.user){
        session.user = false
    }

    if(session.user_id){
        session.user = await User.find(session.user_id).then(user => {
            return user.toObject()
        })
        delete session.user_id
    }

    res.json({session: session})
});

router.post('/clear', (req, res) => {
    req.session.destroy();

    res.clearCookie('user_session')

    res.json({message: "Session Destroyed"})
});

module.exports = router;