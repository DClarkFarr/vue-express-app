<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <h1>Home</h1>
            <div class="tasks">
              <div v-for="task in tasks" :key="task._id">
                <span>{{ task.text || '(No Text)'}}</span>
              </div>
            </div>
        </div>
    </default-layout>
  </div>
</template>

<script>
import defaultLayout from '../../layouts/default';
import ApiService from '../../../utils/ApiService';

export default {
  name: 'page-main-home',
  data(){
    return {
      tasks: [],
    }
  },
  mounted(){
    ApiService.getTasks().then((tasks, request) => {
      this.tasks = tasks;
    });
  },
  components: {
    defaultLayout,    
  }
}
</script>

<style>

</style>
