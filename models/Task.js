const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

const User = require('./User')

class Task {
    constructor(data){
        if(data){
            this.set(data)
        }
    }
    set(data){
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        };
        if(this._id){
            this.id = this._id;
        }
        delete this._id;

        return this;
    }

    onCreate(){
        const defaults = {
            id: null,
            text: '',
            created_at: (new Date()).toISOString(),
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
            id: this.id,
            text: this.text,
            created_at: this.created_at,
            completed: this.completed,
            completed_by: this.completed_by,
            completed_at: this.completed_at,
            id_user: this.id_user,
            author: this.author,
        }
    }
    model(){
        return {
            text: this.text,
            created_at: this.created_at,
            completed: this.completed,
            completed_by: this.completed_by,
            completed_at: this.completed_at,
            id_user: this.id_user,
        }
    }
    markComplete(user){
        var userData = {
            id: user && user.id ? user.id: null,
            name: user && user.name ? user.name : '(Anonymous)',
        } 
        this.set({
            completed: 1,
            completed_by: new User(userData),
            completed_at: (new Date).toISOString(),
        });

        return this.save();
    }
    unmarkComplete(){
        this.set({
            completed: 0,
            completed_by: null,
            completed_at: null,
        });

        return this.save();
    }
    save(data){
        if(data){
            this.set(data)
        }
        const db = getDb();
        return db.collection('tasks').updateOne({_id: ObjectId(this.id)}, {$set: this.model()})
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
    
        return db.collection('tasks').insertOne(task).then(() => {
            if(task._id){
                task.id = task._id;
                delete task._id;
            }

            return task.inflate().then(() => {
                return task;
            })
            
        }).then(() => {
            if(task.completed){
                if(task.id_user){
                    return User.find(task.id_user).then(user => {
                        task.markComplete().then(() => {
                            return task;
                        })
                    })
                }

                return task.markComplete({}).then(() => {
                    return task;
                })
            }
            return task;
        });
    }
    static collect(tasks){
        return tasks.map(t => {
            return (new Task).set(t)
        })
    }

    static delete(id){
        const db = getDb()

        return db.collection('tasks')
            .deleteOne({_id: ObjectId(id) })
    }
    static find(id){
        const db = getDb();
        const user = new this();
       
        return db.collection('tasks').findOne({_id: ObjectId(id)}).then(data => {
            if(data){
                return user.set(data);
            }
            return false;
        });
    }
}


module.exports = Task;