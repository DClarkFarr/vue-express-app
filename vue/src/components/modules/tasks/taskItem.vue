<template>
    <div class="task-item d-flex w-100 px-3 py-2 mb-2 align-items-center">
        <div class="completed">
            <div class="icon checkmark" :class="{checked: !!task.completed}" v-on:click="onComplete">
                <i class="fa" :class="{'fa-check-square-o': !!task.completed, 'fa-square-o': !task.completed}"></i>
            </div>
        </div>
        <div class="description">
            {{task.text}}
        </div>
        <div class="created_by ml-auto align-self-start" v-if="task.author">
            <label>Author</label>
            <div>
                By {{authoredBy.name}}
            </div>
        </div>
        <div class="completed_by ml-auto align-self-start" v-if="task.completed">
            <label>Completed</label>
            <div>
                By {{completedBy.name}}
            </div>
            <div>
                At {{completedBy.date}}
            </div>
        </div>
        <div class="actions ml-auto">
            <button class="btn btn-danger" v-if="canDelete"><i class="fa fa-times"></i></button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        task: Object,
    },
    data(){
        return {

        }
    },
    methods: {
        onComplete(){
            //this.$root.task.completeTask()
        },
    },
    computed: {
        canDelete(){
            // console.log(this.task.text, this.task.id_user, this.$root.user.id)
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
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .task-item  {
        background: #efefef;
    }
    .task-item > *:not(:last-child) {
        margin-right: 5px;
    }
    .task-item > * > label {
        font-size: 0.75rem;
        opacity: 0.75;
        margin-bottom: 3px;
        margin-top: -5px;
    }
</style>
