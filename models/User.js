const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

const Model = require('./Model')

const neo = require('../utils/neode')

class User extends Model{
    schema(){
        return {
            source:  'users',
            exclude: [],
            inflate: ['friends'],
            fields: {
                name: '',
                email: '',
                active: 1,
                created_at: (new Date()).toISOString(),
                friend_ids: [],
            },
        }
    }
    syncNeo(){
        return neo.merge('User', {
            id_user: this.id,
            name: this.name,
        })
    }
    getNeo(){
        return neo.first('User', {id_user: this.id})
    }
    async inflate(){
        if(!this.friends){
            this.friends = await Promise.all(
                this.friend_ids.map((id_friend) => {
                    return User.find(id_friend)
                })
            )
        }
        return this;
    }
    static all(where){
        return super.all(where).sort({name: 1}).sort({name: 1}).toArray().then(rows => {
            return super.collect(rows)
        })
    }
}


module.exports = User;