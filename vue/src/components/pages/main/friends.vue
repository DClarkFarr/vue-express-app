<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
          <h1>Friends</h1>

          <div class="row">
            <div class="col-lg-8">
              <div class="card bg-light">
                <div class="card-header">
                  All Users
                </div>
                <div class="card-body">
                    <div v-if="users.length">
                      <friend-item  v-for="user in users" :friend="user" :key="user.id">
                        <div class="ml-auto actions" slot="actions">
                          <status-button :friend="user"></status-button>
                        </div>
                      </friend-item>
                    </div>
                    <div v-else>
                      <div class="bg-white p3">
                        No Users found
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card text-white bg-primary mb-5">
                <div class="card-header">
                  Top Suggestions
                </div>
                <div class="card-body">
                  <div v-if="logged">
                    <div v-if="suggestions.length">
                      <friend-item class="text-dark" v-for="sug in suggestions" :friend="sug" :key="sug.id">
                        <div slot="actions">
                          <div class="stat text-center mr-3">
                            <span class="badge badge-secondary d-inline-block mr-1">{{sug.countInCommon}}</span>
                            <small class="text-muted">in common</small>
                          </div>
                        </div>
                        <div slot="actions" class="ml-auto">
                          <status-button :friend="sug"></status-button>
                        </div>
                      </friend-item>
                    </div>
                    <div v-else>
                      No suggestions. Make sure to "like" categories that interest you.
                    </div>
                  </div>
                  <div v-else>
                    Login to view suggestions
                  </div>
                </div>
              </div>

              <div class="card text-white bg-success mb-5">
                <div class="card-header">
                  My Friends
                </div>
                <div class="card-body">
                  <div v-if="logged">

                  </div>
                  <div v-else>
                    Login to view friends
                  </div>
                </div>
              </div>

            </div>
          </div>
          
            
        </div>

    </default-layout>
  </div>
</template>

<script>
import defaultLayout from '../../layouts/default';
import friendItem from '../../modules/friends/friend-item'
import statusButton from '../../modules/friends/status-button'
export default {
  name: 'page-main-friends',
  data(){
    return {
      users: [],
      suggestions: [],
      logged: false,
    }
  },
  mounted(){
    this.getUsers()

    if(this.$root.user.id){
      this.logged = true;
      this.getSuggestions()
    }else{
      this.$root.user.$on('user.login', () => {
        this.logged = true;
        this.getSuggestions()
      })
    }

    this.$root.user.$on('user.logout', () => {
      this.suggestions = [];
    })
  },
  methods: {
    getSuggestions(){
      this.$root.user.getSuggestions().then(suggestions => {
        this.suggestions = suggestions;
      })
    },
    getUsers(){
      this.$root.user.getUsers().then(users => {
        this.users = users
      })
    }
  },
  watch: {
  
  },
  components: {
    defaultLayout, 
    friendItem,
    statusButton,
  }
}
</script>

<style>

</style>
