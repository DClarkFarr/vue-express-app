const Neode = require('neode')


const instance = new Neode('bolt://localhost:7687', 'neo4j', 'password')


instance.model('User', {
    id_user: {
        // primary: true,
        unique: true,
        required: true,
        type: 'string',
    },
    name: {
        type: 'name',
    },
})
instance.model('Category', {
    name: {
        type: 'name',
        unique: true,
    }
})
instance.model('User').relationship('User', 'Created', 'out', 'Movie');
instance.model('User').relationship('User', 'Likes', 'out', 'Movie', {
    interactions: {
        type: 'number',
        default: 0,
    },
    likes: {
        type: 'number',
        default: 0,
    },
})


module.exports = instance;