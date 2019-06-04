<template>
    <div class="subpage subpage-me-profile">
        <h3>My Profile</h3>

        <form action="" class="profile-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" disabled v-model="user.email">
            </div>
            <div class="form-group">
                <label>Image</label>
                <div class="row">
                    
                    <div class="col-lg-4">
                        <div class="p-2">
                            <img v-if="user.image" :src="userImage" alt="" class="img-fluid">
                            <div v-else class="text-center">
                                No Image
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-8">
                       
                        <input type="file" ref="file" class="form-control-file">
                    </div>
                </div>
                
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Update Profile</button>
            </div>
        </form>
    </div>
</template>

<script>

import ApiService from '../../../utils/ApiService'

export default {
    data(){
        return {
            user: {},
            file: null,
        }
    },
    mounted(){
        // this.$root.user.on('user.logout', result => {
        //     this.user = {};
        // })

        this.setUser();
    },
    methods: {
        setUser(){
            this.user = Object.assign({}, this.user, {
                name: this.$root.user.name,
                image: this.$root.user.image,
                email: this.$root.user.email,
            })
        },
        onSubmit(){
            var post = {
                name: this.user.name,
                email: this.user.email, 
            };
            if(this.$refs.file.files.length){
                post.file = this.$refs.file.files[0];
            }
            this.$root.user.update(post).then( (result) => {
                console.log('result', result.user.image, 'vs', this.$root.user.image)

                this.setUser()
            });
        },
    },
    computed: {
        userImage(){
            var image = this.user.image;

            if(window.location.host == 'localhost:8080'){
                image = 'http://localhost:3333' + this.user.image;
            }

            return image;
        }
    },
    watch: {
        '$root.user.id': function(newid, oldid){
            this.setUser()
        },
    }
    
}
</script>