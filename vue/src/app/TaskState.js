import Vue from 'vue';
import ApiService from '../utils/ApiService';

export default new Vue({
    data(){
        return this.defaultData()
    },

    methods: {
        defaultData(){
            return  {
                tasks: [],
                sessionTaskIds: [],
            }
        },
        setSessionTasks(tasks){
            this.sessionTaskIds = tasks.map(task => {
                return task._id;
            })
        },
        getTasks(){
            if(this.tasks.length){
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
                    this.tasks.push({...result.task});

                    return result;
                }else{
                    return result;
                }
            })
        }
    }
});