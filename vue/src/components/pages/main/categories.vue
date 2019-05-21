<template>
  <div class="page page-main-home">
    <default-layout>
        <div class="container">
            <h1>Categories</h1>
            <div class="categories-wrap">

            </div>
            <div class="alert alert-danger mt-3" v-if="error.length">
              {{error}}
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

export default {
  name: 'page-main-categories',
  data(){
    return {
      categories: [],
      error: '',
      category: '',
    }
  },
  mounted(){
    ApiService.getCategories()
  },
  methods: {
    onAddCategory(){
      this.error = "";

      if(this.category.length > 25 || this.category.length < 3){
        this.error = "Category Name must be between 3-25 characters"

        return;
      }
    }
  },
  components: {
    defaultLayout,    
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
