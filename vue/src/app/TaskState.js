import Vue from 'vue';
import ApiService from '../utils/ApiService';

import Socket from '../utils/Socket'

export default new Vue({
    data(){
        return this.defaultData()
    },

    methods: {
        openSocket(){
            return this.socket = Socket.getConnection('tasks').on('connect', () => {
                console.log("connected");
                this.socket.on('tasks.updated', (result) => {
                    console.log('tasks.updated', result);
                })
            })
        },
        closeSocket(){
            if(this.socket){
                Socket.destroy('tasks');
            }
            this.socket = false;
        },
        defaultData(){
            return  {
                tasks: [],
                sessionTaskIds: [],
                socket: false,
            }
        },

        setSessionTasks(tasks){
            this.sessionTaskIds = tasks.map(task => {
                return task._id;
            })
        },
        getTasks(force){
            if(this.tasks.length && !force){
                return Promise.resolve([...this.tasks]);
            }
            return ApiService.getTasks().then(tasks => {
                this.tasks = tasks;

                return [...this.tasks];
            })
        },
        add(data){
            const error = function(message){
                return Promise.resolve({
                    status: 'failed',
                    message: message,
                });
            }
            if(!data.text){
                return error('Please add task description')
            }

            return ApiService.addTask(data).then((result) => {
                if(result.status == 'success'){

                }
                return result;
            })
        },
        deleteById(id){
            var index = this.tasks.findIndex(t => {
                return id == t.id
            })

            return ApiService.deleteTask(id).then((result) => {

                return result;
            });
        },
        toggleCompleted(id, userData){
            var task = this.tasks.find(t => {
                return id == t.id
            })

            return ApiService.toggleTaskCompleted(id, {user: userData}).then((result) => {
                if(result.status == 'success'){

                }
                return result;
            });
        },
        onCreated(task){
            this.tasks.push(task);
        },
        onUpdated(task){
            let old = this.tasks.find(t => {
                return task.id == t.id
            })

            this.$set(this.tasks, this.tasks.indexOf(old), task);
        },
        onDeleted(taskId){
            let old = this.tasks.find(t => {
                return taskId == t.id
            })

            this.tasks.splice( this.tasks.indexOf(old), 1);
        }
    }
});