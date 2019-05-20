const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

class User {
    constructor(data){

    }
    set(data){
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        };
        if(this._id){
            this.id = this._id;
        }
        return this;
    }

    onCreate(){
        const defaults = {
            id: null,
            name: '',
            email: '',
            created_at: (new Date()).toUTCString(),
            deleted: 0,
        };

        for (const [key, value] of Object.entries(defaults)) {
            if(this[key] === undefined) {
                this[key] = value;
            }
        };
     }

    toObject(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            active: this.active,
            created_at: this.created_at,
        }
    }

    static create(data){
        var obj = new this();
        obj.set(data);
        obj.onCreate();

        const db = getDb();

        return db.collection('users').insertOne(obj).then(function(inserted){
            return obj;
        });
    }
    static find(_id){
        const db = getDb();
        const user = new this();
       
        return db.collection('users').findOne({_id: ObjectId(_id)}).then(data => {
            if(data){
                return user.set(data);
            }
            return false;
        });
    }
}


module.exports = User;