<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import defaultLayout from './components/layouts/default';

import userState from './states/User';

import router from './router';

export default {
  name: 'app',
  router,
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
