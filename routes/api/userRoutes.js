const express = require('express');
const router = express.Router();

const root = require('../../utils/root');
const getDb = require(root('utils/connection')).getDb;
const User = require(root('models/User'));
const neo = require('../../utils/neode')

router.get('/by-email', (req, res) => {
    const instance = new User;

    instance.getCollection().findOne({email: req.query.email}).then(row => {
        if(row){
            instance.set(row).toObject().then(() => {
                return instance.syncNeo();
            }).then(() => {
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
            user.syncNeo().then((result) => {
                res.json({user: user});
            })
        });
    })    
})

router.get('/categories', async (req, res) => {
    const user = await User.find(req.query.id_user);
    const neoUser = await user.getNeo();

    //next steps 
    // 1) Rework to query created and liked separately
    // 2) Likes query needs to combine relationship.likes
    
    const query = `
        MATCH (u:User) WHERE ID(u) = ${neoUser.id()}
        OPTIONAL MATCH (u)-[:Created]->(created)
        OPTIONAL MATCH (u)-[:Liked]->(liked)
        RETURN created, liked
        ORDER BY created.name ASC, liked.name ASC
    `;

    const result = await neo.cypher(query);
    
    var liked = [];
    var created = [];

    result.records.forEach(record => {
        var obj = record.toObject()
        if(obj.created){
            created.push({id: obj.created.identity.low, ...obj.created.properties})
        }
        if(obj.liked){
            liked.push({id: obj.liked.identity.low, ...obj.liked.properties})
        }
    })

    
    res.json({status: 'success', created: created, liked: liked})
})

module.exports = router;