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
            }
        },
        login(user, saveSession){
            Object.assign(this, user, {logged: true});
            if(saveSession){
                ApiService.sessionSet({user: user});
            }
        },
        logout(){
            Object.assign(this, {logged: false}, this.defaultData());
            ApiService.sessionClear()
        }
    },
});