const express = require("express");


const router = express.Router();
const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const sessionMiddleware = require(root('utils/middleware/session'))
const User = require('../../models/User')

router.use(sessionMiddleware())

router.use((req, res, next) => {
    if(req.cookies.user_session && !(req.session.user && req.session.user.id)){
        User.find(req.cookies.user_session).then( async (user) => {
            if(!user){
                return next()
            }

            req.session.user = Object.assign({}, req.session.user, await user.toObject());

            req.session.save(() => {
                next()
            });
        })
    }else{
        next();
    }
   
})

router.post('/set', (req, res) => {
    for(var key in req.body){
        req.session[key] = req.body[key];
    }

    const session = {...req.session};
    delete session.cookie;

    res.cookie('user_session', session.user.id)

    req.session.save(() =>{
        res.json({session: session})
    })
    
});

router.post('/get', (req, res) => {
    const session = {...req.session};
    delete session.cookie;

    res.json({session: session})
});

router.post('/clear', (req, res) => {
    req.session.destroy();

    res.clearCookie('user_session')

    res.json({message: "Session Destroyed"})
});

module.exports = router;