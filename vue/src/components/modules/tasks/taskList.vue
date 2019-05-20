<template>
    <div class="task-list">
        <task-item v-for="task of tasks" :key="task._id" :task="task"></task-item>
    </div>
</template>

<script>

import TaskItem from './taskItem'

export default {
    name: "task-list",
    props: {
        tasks: Array,   
    },
    data(){
        return {
           
        }
    },
    mounted(){

    },
    methods: {

    },
    components: {
        TaskItem,
    }
}
</script>
