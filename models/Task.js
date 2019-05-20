const getDb = require('../utils/connection').getDb;

class Task {
    constructor(data){

    }
    set(data){
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        };
    }

    onCreate(){
        const defaults = {
            text: '',
            created_at: (new Date()).toUTCString(),
            completed: 0,
            completed_by: null,
            completed_at: null,
            id_user: false,
        };

        for (const [key, value] of Object.entries(defaults)) {
            if(this[key] === undefined) {
                this[key] = value;
            }
        };
     }

    toObject(){
        return {
            text: this.text,
            completed: this.completed,
            created_at: this.created_at,
            id_user: this.id_user,
        }
    }

    static create(data){
        var task = new this();
        task.set(data);
        task.onCreate();

        const db = getDb();

        return db.collection('tasks').insertOne(task).then(function(inserted){
            console.log(inserted.insertedId);
            return task;
        });
    }
}


module.exports = Task;