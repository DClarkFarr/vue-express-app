<template>
    <div class="category card m-3">
        <div class="card-body">
            <button v-if="isOwner" class="btn btn-danger btn-sm rounded-circle btnDelete">
                <i class="fa fa-times"></i>
            </button>
            <div class="card-title text-center">
                {{category.name}}
            </div>
            <div class="text-center">
                <a href="javascript:void(0)" class="like-icon" :class="{liked: isLiked}">
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
export default {
    props: ['category'],
    mounted(){

    },
    computed: {
        numLikes(){
            return 0
        },
        isLiked(){
            return this.numLikes > 0;
        },
        isOwner(){
            return true
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

