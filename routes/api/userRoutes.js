const express = require('express');
const router = express.Router();

const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const User = require(root('models/User'));

router.get('/by-email', (req, res) => {
    const instance = new User;

    instance.getCollection().findOne({email: req.query.email}).then(row => {
        if(row){
            instance.set(row).toObject().then(() => {
                res.json({user: instance})
            });
        }else{
            res.json({user: false})
        } 
    })
})

router.post('/create', (req, res) => {
    const instance = new User;

    instance.getCollection().findOne({email: req.body.email}).then(user => {
        if(user){
            instance.set(user).toObject().then(() => {
                res.json({user: user})
            })
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