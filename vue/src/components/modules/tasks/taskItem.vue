<template>
    <div class="task-item d-flex w-100 px-3 py-2 mb-2 align-items-center">
        <div class="completed">
            <div class="icon checkmark" :class="{checked: !!task.completed, disabled: toggling}" v-on:click="onToggleComplete">
                <i class="fa" :class="iconStatus"></i>
            </div>
        </div>
        <div class="description">
            {{task.text}}
        </div>
        <div class="created_by align-self-start">
            <label>Author</label>
            <div>
                By {{authoredBy.name}}
            </div>
        </div>
        <div class="completed_by align-self-start" v-if="task.completed">
            <label>Completed</label>
            <div>
                By {{completedBy.name}}
            </div>
            <div>
                At {{completedBy.date}}
            </div>
        </div>
        <div class="actions ml-auto">
            <button class="btn btn-danger" v-if="canDelete" v-on:click="onDelete" :disabled="submitting"><i class="fa fa-times"></i></button>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        task: Object,
    },
    data(){
        return {
            submitting: false,
            toggling: false,
        }
    },
    methods: {
        onToggleComplete(){
            this.toggling = true;

            const userData = {};
            if(this.$root.user.id){
                userData.id = this.$root.user.id;
                userData.name = this.$root.user.name;
            }

            this.$root.tasks.toggleCompleted(this.task.id, userData).then(() => {
                this.toggling = false;
            })
        },
        onDelete(){
            this.submitting = true;
            this.$root.tasks.deleteById(this.task.id).then(() => {
                this.submitting = false;
            });
        }
    },
    computed: {
        iconStatus(){
            if(this.toggling){
                return {'fa-circle-o-notch fa-spin': this.toggling};
            }
            return {'fa-check-square-o': !!this.task.completed, 'fa-square-o': !this.task.completed};
        },
        canDelete(){
            return !this.task.id_user || this.task.id_user == this.$root.user.id
        },
        completedBy(){
            return {
                name: this.task.completed_by 
                    ? this.task.completed_by.name
                    : '(Annon User)',
                date: this.task.completed_at 
                    ? moment(this.task.completed_at).format('MMM DD YYYY @h:mma')
                    : '(N/A)'
            }
        },
        authoredBy(){
            return {
                name: this.task.author 
                    ? this.task.author.name
                    : '(Annon User)',
            }
        }
    },
}
</script>

<style scoped>
    .completed .icon {
        font-size: 1.5rem;
    }
    .completed .icon:not(.disabled){
        cursor: pointer;
    }
    .completed .icon.checked {
        color: #28a745;
    }
    .completed {
        width: 20px;
    }
    .description {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .task-item  {
        background: #efefef;
    }
    .task-item > *:not(:last-child) {
        margin-right: 10px;
    }
    .task-item > * > label {
        font-size: 0.75rem;
        opacity: 0.75;
        margin-bottom: 3px;
        margin-top: -5px;
    }
    .created_by {
        min-width: 150px;
    }
</style>
