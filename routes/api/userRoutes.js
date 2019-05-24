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

router.get('/all', (req, res) => {
    User.all().then(users => {
        res.json({status: 'success', users: users})
    });
})

router.get('/categories', async (req, res) => {
    const user = await User.find(req.query.id_user);
    const neoUser = await user.getNeo();

    //next steps 
    // 1) Rework to query created and liked separately
    // 2) Likes query needs to combine relationship.likes
    // 3  Make them into static async category methods

    const query = `
        MATCH (u:User) WHERE ID(u) = ${neoUser.id()}
        OPTIONAL MATCH (u)-[:Created]->(created)
        OPTIONAL MATCH (u)-[l:Liked]->(liked)
        RETURN created, liked, l
        ORDER BY created.name ASC, liked.name ASC
    `;

    const result = await neo.cypher(query);
    
    let liked = {};
    let created = {};

    result.records.forEach(record => {
        let obj = record.toObject()
        if(obj.created){
            let createdId = parseInt(obj.created.identity.toString())
            created[createdId] = {id: createdId, ...obj.created.properties}
        }
        if(obj.liked){
            let likedId = parseInt(obj.liked.identity.toString())
            liked[likedId] = Object.assign(
                {id: likedId, ...obj.liked.properties},
                {likes: parseInt(obj.l.properties.likes.toString()), interactions: parseInt(obj.l.properties.interactions.toString())}
            )
        
        }
    })

    created = Object.entries(created).map(pair => {
        return pair[1]
    })
    liked = Object.entries(liked).map(pair => {
        return pair[1]
    })

    res.json({status: 'success', created: created, liked: liked})
})

router.get('/:id_user/suggestions', async (req, res) => {
    const user = await User.find(req.params.id_user);
    const neoUser = await user.getNeo();
    neo.cypher(`
        MATCH (t:User)-[tl:Liked]->(tlc:Category) WHERE id(t) = ${neoUser.id()}
        MATCH (f:User)-[fl:Liked]->(tlc)
        WHERE NOT f = t
        WITH f, count(fl) AS countInCommon, sum(fl.likes) AS totalLikes
        RETURN f, countInCommon, totalLikes,  (countInCommon * 2) + totalLikes as score
        ORDER BY score DESC, countInCommon DESC, totalLikes DESC
        LIMIT 5
    `).then(result => {
        let suggestions = result.records.map(record => {
            
            return {
                id_node: parseInt(record.get('f').identity.toString()),
                name: record.get('f').properties.name,
                id_user: record.get('f').properties.id_user, 
                countInCommon: parseInt(record.get('countInCommon').toString()),
                totalLikes: parseInt(record.get('totalLikes').toString()),
                score: parseInt(record.get('score').toString())
            }
        })
        res.json({status: 'success', suggestions: suggestions})
    })
    

    
})

module.exports = router;