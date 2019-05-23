<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <h1>Categories</h1>
            <div class="categories-wrap d-flex flex-wrap justify-content-center">
              <category-card 
                v-for="category in categories" 
                :category="category" :key="category._id" 
                :liked_ids="likedIds" 
                :created_ids="createdIds"
                v-on:categoryDeleted="onCategoryDeleted"
                v-on:categoryAddLike="onCategoryAddLike"></category-card>
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
    this.getCategories();

    if(this.$root.user.id){
      this.getUserCategories()
    }else{
      this.$root.user.$on('user.login', () => {
        this.getUserCategories()
      })
    }

    this.$root.user.$on('user.categories.changed', (created, liked) => {
      this.userCreated = created;
      this.userLiked = liked;
    })
  },
  methods: {
    onCategoryAddLike(id_category){
      this.error = "";
      if(!this.$root.user.id){
        return this.error = "You must be logged in to add categories"
      }
      ApiService.addCategoryLike(id_category, this.$root.user.id).then(() => {
        this.getUserCategories()
      });
    },
    onCategoryDeleted(id_category){
      this.getCategories()
    },
    getCategories(){
      return ApiService.getCategories().then(result => {
        this.categories = result.categories;
      })
    },
    getUserCategories(){
      this.$root.user.getCategories()
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

        this.getUserCategories();

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
