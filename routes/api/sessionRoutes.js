const express = require("express");


const router = express.Router();
const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const sessionMiddleware = require(root('utils/middleware/session'))

router.use(sessionMiddleware())

router.post('/set', (req, res) => {
    
    for(var key in req.body){
        req.session[key] = req.body[key];
    }

    const session = {...req.session};
    delete session.cookie;

    req.session.save(() =>{
        res.json({session: session})
    })
    
});

router.post('/get', (req, res) => {

    console.log('api', req.sessionID, req.cookies);

    const session = {...req.session};
    delete session.cookie;

    res.json({session: session})
});

router.post('/clear', (req, res) => {
    req.session.destroy();

    res.json({message: "Session Destroyed"})
});

module.exports = router;