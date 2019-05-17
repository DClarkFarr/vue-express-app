<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <h1>Login</h1>
                <div v-if="success.length" class="alert alert-success">
                  {{success}}
                </div>
                <div v-if="error.length" class="alert alert-danger">
                  {{error}}
                </div>
                <form action="" v-on:submit.prevent="onSubmit">
                  <div class="form-group">
                    <label>Username/Email</label>
                    <input type="text" class="form-control" v-model="email">
                  </div>
                  <div class="form-group" v-if="email && accountExists === false">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="name">
                  </div>
                  <div class="form-group">
                    <div v-if="accountExists === null">
                      <button class="btn btn-primary btn-block" :disabled="submitting">Next</button>
                    </div>
                    <div v-if="accountExists === false">
                      <button class="btn btn-primary btn-block" :disabled="submitting">Create Account &amp; Sign In</button>
                    </div>
                  </div>
                </form>
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
  name: 'page-main-login',
  data(){
    return {
      email: '',
      name: '',
      error: '',
      success: '',
      accountExists: null,
      submitting: false,
    }
  },
  mounted(){
  
  },
  methods: {
    onSubmit(){
      this.error = "";
      this.success = "";
      if(!this.email){
        this.error = "Email is required";
      }
      
      if(this.accountExists === null){
        
        if(this.error.length){
          return false;
        }

        ApiService.getUserByEmail(this.email).then(result => {
          if(result.user){
            this.login(result.user);
          }else{
            this.accountExists = false;
          }
        }).catch(err => {
          this.error = 'Could not perform login.'
        });
      }else{
        if(!this.name.length){
          this.error = 'Please choose a name'
        }
        
        if(this.error.length){
          return false;
        }

        ApiService.createUser({
          email: this.email,
          name: this.name,
        }).then(result => {
          this.login(result.user);
        })
      }
    },
    login(user){
      this.$root.user.login(user);
      this.success = "Login successful!"
      setTimeout(() => {
        this.$router.push('/');
      }, 1500);
    }
  },
  components: {
    defaultLayout,    
  }
}
</script>

<style>

</style>
