const express = require('express');

const router = express.Router();

const Category = require('../../nodes/Category')

const User = require('../../models/User')


router.get('/all', (req, res) => {
    Category.all().then( (categories) => {
        return categories.toJson();
    }).then(categories => {
        res.json({status: 'success', categories: categories})
    })
})

router.post('/add', async (req, res) => {
    const instance = new Category;
    const neo = instance.getNeo();

    const user = await User.find(req.body.id_user)
    const neoUser = await user.getNeo()
    const cat = {name: req.body.categoryName};

    const exists = await neo.first('Category', cat)
    if(exists){
        return res.json({status: 'failed', message: 'Category already created'})
    }

    neo.create('Category', cat).then(categoryNode => {
        return neoUser.relateTo(categoryNode, 'created').then((result) => {
            return categoryNode.toJson()
        })
    }).then(category => {
        res.json({status: 'success', message: 'Category created', category: category})
    }).catch(err => {
        console.log('category/add', err)
        res.json({status: 'failed', message: err.message})
    })
})

router.post('/delete/:id_category', async (req, res) => {
    const instance = new Category;
    const neo = instance.getNeo();

    const user = await User.find(req.body.id_user)
    if(!user || !user.id){
        return res.json({status: 'failed', message: 'User not found'})
    }
    const neoUser = await user.getNeo()
    const category = await neo.findById('Category', req.params.id_category)

    if(!category){
        return res.json({status: 'failed', message: 'Category not found'})
    }

    neo.cypher(`MATCH (c:Category) WHERE id(c) = ${category.id()} DETACH DELETE c RETURN c`).then(result => {
        res.json({status: 'success', message: 'Category Deleted'})
    }).catch(err => {
        res.json({status: 'failed', message: err.message})
    })
})

router.post('/like/:id_category', async (req, res) => {
    const instance = new Category;
    const neo = instance.getNeo();

    const user = await User.find(req.body.id_user)
    if(!user || !user.id){
        return res.json({status: 'failed', message: 'User not found'})
    }
    const neoUser = await user.getNeo()
    const category = await neo.findById('Category', req.params.id_category)

    if(!category){
        return res.json({status: 'failed', message: 'Category not found'})
    }

    var likeData = await Category.getUserLikes(neoUser, category)

    if(likeData.likes && likeData.likes.likes >= 5){
        await Category.resetUserLikes(neoUser, category)
        likeData = {likes: false}
    }else{
        likeData = await Category.addUserLikes(neoUser, category);
    }

    likeData = await Category.getUserLikes(neoUser, category)

    res.json({status: 'success', message: 'Temp add', likes: likeData.likes ? likeData.likes.likes : 0, neoUserId: neoUser.id(), neoCatId: category.id()})
})


module.exports = router;