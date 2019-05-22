<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <h1>Categories</h1>
            <div class="categories-wrap d-flex flex-wrap justify-content-center">
              <category-card v-for="category in categories" :category="category" :key="category._id"></category-card>
            </div>
            <div class="alert alert-danger mt-3" v-if="error.length">
              {{error}}
            </div>
            <div class="alert alert-success mt-3" v-if="success.length">
              {{success}}
            </div>
            <div class="mt-3">
              <div class="row">
                <div class="col-lg-4">
                  <input type="text" class="form-control" v-model="category" placeholder="Category Name">
                </div>
                <div class="col-lg-4">
                  <button class="btn btn-primary" @click="onAddCategory">Add Category</button>
                </div>
              </div>
              
            </div>
        </div>
    </default-layout>
  </div>
</template>

<script>
import defaultLayout from '../../layouts/default';
import ApiService from '../../../utils/ApiService'

import CategoryCard from '../../modules/categories/category-card' 

export default {
  name: 'page-main-categories',
  data(){
    return {
      categories: [],
      userLiked: [],
      userCreated: [],
      error: '',
      success: '',
      category: '',
    }
  },
  mounted(){
    ApiService.getCategories().then(result => {
      this.categories = result.categories;
    })
    if(this.$root.user.id){
      this.getUserCategories()
    }else{
      this.$root.user.$on('user.login', () => {
        this.getUserCategories()
      })
    }
  },
  methods: {
    getUserCategories(){
      this.$root.user.getCategories().then(result => {
        this.userLiked = result.liked;
        this.userCreated = result.created;
      })
    },
    onAddCategory(){
      this.error = this.success = "";

      if(this.category.length > 25 || this.category.length < 3){
        this.error = "Category Name must be between 3-25 characters"

        return;
      }

      if(!this.$root.user.id){
        return this.error = "You must be logged in to add categories"
      }

      ApiService.addCategory(this.category, this.$root.user.id).then(result => {
        if(result.status == 'success'){
          this.success = 'Success! Category created';
          this.categories.push(result.category)
        }else{
          this.error = result.message;
        }

        setTimeout(() => {
          this.error = '' 
          this.success = ''
        }, 2000)
      })
    }
  },
  computed: {
    likedIds(){
      return this.userLiked.map(c => {
        return c.id;
      })
    },
    createdIds(){
      return this.userCreated.map(c => {
        return c.id;
      })
    }
  },
  components: {
    defaultLayout,    
    CategoryCard,
  }
}
</script>

<style scoped>
  .categories-wrap {
    padding: 25px;
    border-radius: 10px;
    background: #ebebeb;
  }
</style>
