const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

const Model = require('./Model')

class User extends Model{
    schema(){
        return {
            source:  'users',
            exclude: [],
            inflate: [],
            fields: {
                name: '',
                email: '',
                active: 1,
                created_at: (new Date()).toISOString(),
            },
        }
    }   
}


module.exports = User;