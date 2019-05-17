const getDb = require('../utils/connection').getDb;

class User {
    constructor(data){

    }
    set(data){
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        };
    }

    onCreate(){
        const defaults = {
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
            console.log(inserted.insertedId);
            return obj;
        });
    }
}


module.exports = User;