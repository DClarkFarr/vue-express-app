<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import defaultLayout from './components/layouts/default';

import userState from './app/UserState';

import router from './router';

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
    })
  },
  data(){
    return {
      user: userState,
    }
  },
  components: {
    defaultLayout,    
  }
}
</script>

<style>

</style>
