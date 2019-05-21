const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;

const User = require('./User')
const Model = require('./Model')

class Task extends Model {
    
    schema(){
        return {
            source:  'tasks',
            exclude: [],
            inflate: ['author'],
            fields: {
                text: '',
                created_at: (new Date()).toISOString(),
                completed: 0,
                completed_by: null,
                completed_at: null,
                id_user: false,
            },
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
        return super.create(data).then((task) => {
            if(task.completed){
                if(task.id_user){
                    return User.find(task.id_user).then(user => {
                        return task.markComplete(user).then(() => {
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
}


module.exports = Task;