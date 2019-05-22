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

    neo.create('Category', {name: req.body.categoryName}).then(categoryNode => {
        return neoUser.relateTo(categoryNode, 'created').then((result) => {
            console.log('added', result.toJson())
            return categoryNode.toJson()
        })
    }).then(category => {
        res.json({status: 'success', message: 'Category created', category: category})
    }).catch(err => {
        res.json({status: 'failed', message: err.message})
    })
})


module.exports = router;