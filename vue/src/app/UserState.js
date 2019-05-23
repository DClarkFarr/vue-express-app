import Vue from 'vue';
import ApiService from '../utils/ApiService';

export default new Vue({
    data(){
        return this.defaultData()
    },

    methods: {
        defaultData(){
            return  {
                id: false,
                email: null,
                name: null,
                created_at: null,
                deleted: null,
                logged: false,
                createdCategories: [],
                likedCategories: [],
            }
        },
        login(user, saveSession){
            Object.assign(this, user, {logged: true});
            if(saveSession){
                ApiService.sessionSet({user: user});
            }
            this.$emit('user.login')
        },
        logout(){
            Object.assign(this, {logged: false}, this.defaultData());
            ApiService.sessionClear()

            this.$emit('user.logout')
        },
        getCategories(){
            return ApiService.getUserCategories(this.id).then(result => {
                if(result.status == 'success'){
                    this.createdCategories = result.created;
                    this.likedCategories = result.liked;

                    this.$emit('user.categories.changed', [...this.createdCategories], [...this.likedCategories])
                }

                return result;
            });
        }
    },
});