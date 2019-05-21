const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

const Model = require('./Model')

const neo = require('../utils/neode')

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
    syncNeo(){
        return neo.merge('User', {
            id_user: this.id,
            name: this.name,
        })
    }
    getNeo(){
        neo.first('User', {id_user: this.id}).then(neoUser => {
            console.log('neo user', neoUser);
        })
    }
    async inflate(){
        // if(!this.neoUser){
        //     this.neoUser = await neo.first('User', {id_user: this.id}).then(node => {
        //         return {labels: node.labels(), name: node.get('name'), id_user: node.get('id_user')}
        //     })
        //     console.log('neoUser', this.neoUser);     
        // }

        return this;
    }
}


module.exports = User;