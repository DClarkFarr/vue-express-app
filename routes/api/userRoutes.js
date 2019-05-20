const express = require('express');
const router = express.Router();

const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const User = require(root('models/User'));

router.get('/by-email', (req, res) => {
    const db = getDb();
    db.collection('users').findOne({email: req.query.email}).then(row => {
        const user = new User;
        user.set(row);
        
        res.json({user: user})
    })
})

router.post('/create', (req, res) => {
    const db = getDb();
    db.collection('users').findOne({email: req.body.email}).then(user => {
        if(user){
            res.json({user: user})
            return;
        }
        User.create({
            email: req.body.email,
            name: req.body.name,
        }).then(user => {
            res.json({user: user});
        });
    })    
})

module.exports = router;