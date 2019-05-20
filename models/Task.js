const getDb = require('../utils/connection').getDb;

const User = require('./User')

class Task {
    constructor(data){

    }
    set(data){
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        };
        return this;
    }

    onCreate(){
        const defaults = {
            text: '',
            created_at: (new Date()).toUTCString(),
            completed: 0,
            completed_by: null,
            completed_at: null,
            id_user: false,
            author: null,
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
    async inflate(){
        this.author = null;
        if(this.id_user){
            await User.find(this.id_user).then(user => {
                this.author = user;
            });
        }        

        return this;
    }

    static create(data){
        var task = new this();
        task.set(data);
        task.onCreate();

        const db = getDb();

        return db.collection('tasks').insertOne(task).then(function(inserted){
            return task;
        });
    }
    static collect(tasks){
        return tasks.map(t => {
            return (new Task).set(t)
        })
    }
}


module.exports = Task;