<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <h1>Home</h1>
            <div v-if="tasks.length" class="home-tasks">
              <task-list :tasks="tasks"></task-list>
            </div>
            <div v-else>
              <h3>No Tasks Found</h3>
            </div>

            <hr>

            <task-create-form></task-create-form>
        </div>

    </default-layout>
  </div>
</template>

<script>
import defaultLayout from '../../layouts/default';

import TaskList from '../../modules/tasks/taskList'
import TaskCreateForm from '../../modules/tasks/createForm'

export default {
  name: 'page-main-home',
  data(){
    return {
      tasks: [],
    }
  },
  mounted(){
    this.$root.tasks.getTasks().then((tasks) => {
      this.tasks = tasks;
    });
  },
  watch: {
    '$root.tasks.tasks': function(tasks){
      this.tasks = tasks;
    }
  },
  components: {
    defaultLayout, 
    TaskList,   
    TaskCreateForm,
  }
}
</script>

<style>

</style>
