<template>
    <div class="category card m-3">
        <div class="card-body">
            <button v-if="isOwner" v-on:click="onDelete" class="btn btn-danger btn-sm rounded-circle btnDelete">
                <i class="fa fa-times"></i>
            </button>
            <div class="card-title text-center">
                {{category.name}}
            </div>
            <div class="text-center">
                <a href="javascript:void(0)" 
                    class="like-icon" 
                    :class="{liked: isLiked}"
                    v-on:click="onAddLike">
                    <span class="d-inline-block icon">
                        <i class="fa fa-heart"></i>
                    </span>
                    <span class="d-inline-block">
                        ({{numLikes}})
                    </span>
                </a>   
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '../../../utils/ApiService'

export default {
    props: ['category', 'created_ids', 'likes'],
    mounted(){

    },
    methods: {
        onDelete(){
            ApiService.deleteCategory(this.category._id, this.$root.user.id).then(result => {
                if(result.status == 'success'){
                    this.$emit('categoryDeleted', this.category._id)
                }else{
                    alert(result.message);
                }
            })
        },
        onAddLike(){
            this.$emit('categoryAddLike', this.category._id)
        }
    },
    computed: {
        numLikes(){
            return this.likes[this.category._id] ? this.likes[this.category._id] : 0
        },
        isLiked(){
            return this.numLikes > 0;
        },
        isOwner(){
            return this.created_ids.indexOf(this.category._id) > -1
        }
    }
}
</script>

<style scoped>
    .category {
        position: relative;
    }
    .btnDelete {
        top: -10px;
        right: -10px;
        position: absolute;
    }
</style>

