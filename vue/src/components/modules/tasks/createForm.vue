<template>
    <div class="task-create-form">
        <h4>Add Task</h4>
        <div class="alert alert-danger" v-show="error.length">
            {{error}}
        </div>
        <div class="row">
            <div class="col-lg-5">
                <input type="text" class="form-control" v-model="text" placeholder="Task Desc.">
            </div>
            <div class="col-lg-4 pt-2">
                <label class="">
                    <input type="checkbox" class="checkbox mr-1" v-model="completed" value="1">
                    Mark Complete
                </label>
            </div>
            <div class="col-lg-3">
                <button class="btn btn-success" v-on:click="onAddTask" :disabled="submitting">Add Task</button>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    data(){
        return {
            text: '',
            completed: 0,
            error: '',
            submitting: false,
        }
    },
    methods: {
        onAddTask(){
            this.error = '';
            this.submitting = true;

            this.$root.tasks.add({
                text: this.text,
                completed: this.completed ? 1 : 0,
                id_user: this.currUserId(),
            }).then(result => {
                this.submitting = false;
                if(result.status == 'success'){
                    this.clearForm()
                }else{
                    this.error = result.message;
                }
            })
        },
        clearForm(){
            this.text = '';
            this.completed = 0;
            this.error = '';
        },
        currUserId(){
            return this.$root.user.id || false;
        }
    }
}
</script>
