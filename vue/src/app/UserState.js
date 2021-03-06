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
                friend_ids: [],
                logged: false,
                createdCategories: [],
                likedCategories: [],
                users: [],
                suggestions: [],
            }
        },
        login(user, saveSession){
            Object.assign(this, user, {logged: true});
            if(saveSession){
                ApiService.sessionSet({user_id: user.id});
            }
            this.$emit('user.login')
        },
        logout(){
            Object.assign(this, {logged: false}, this.defaultData());
            ApiService.sessionClear()

            this.$emit('user.logout')
        },
        getUsers(){
            return ApiService.getUsers().then(result => {
                if(result.status == 'success'){
                    this.users = result.users
                }
                return [...result.users] || []
            })
        },
        update(data){
            if(!this.id){
                return Promise.reject('User not logged in');
            }

            return ApiService.updateUser(this.id, data).then(result => {
                Object.entries(data).forEach(entry => {
                    if(entry[0] == 'file'){
                        entry[0] = 'image';
                    }
                    this[entry[0]] = result.user[entry[0]]
                })

                return result;
            })
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
        },
        getSuggestions(){
            return ApiService.getUserSuggestions(this.id).then(result => {
                return result.suggestions;
            })
        },
        addFriend(id_friend){
            return ApiService.addUserFriend(this.id, id_friend).then(result => {
                this.friend_ids = result.user.friend_ids
                return result;
            })
        },
        unfriend(id_friend){
            return ApiService.removeUserFriend(this.id, id_friend).then(result => {
                this.friend_ids = result.user.friend_ids
                return result
            })
        }
    },
});