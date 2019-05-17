import Vue from 'vue';

export default new Vue({
    data(){
        return this.defaultData()
    },

    methods: {
        defaultData(){
            return  {
                _id: false,
                email: null,
                name: null,
                created_at: null,
                deleted: null,
                logged: false,
            }
        },
        login(user){
            Object.assign(this, user, {logged: true});
        },
        logout(){
            Object.assign(this, {logged: false}, this.defaultData());
        }
    }
});