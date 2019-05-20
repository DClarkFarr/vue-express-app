<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import userState from './app/UserState'
import taskState from './app/TaskState'

import router from './router'

import ApiService from './utils/ApiService'

export default {
  name: 'app',
  router,
  mounted(){
    ApiService.sessionGet().then(result => {
      var session = result.session;
      if(session.user){
        this.user.login(session.user)
      }
      if(session.tasks){
        this.tasks.setSessionTasks(session.tasks);
      }
    })
  },
  data(){
    return {
      user: userState,
      tasks: taskState,
    }
  },
  components: {

  }
}
</script>

<style>

</style>
