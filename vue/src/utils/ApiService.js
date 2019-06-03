import axios from 'axios'
import qs from 'querystring';

axios.defaults.withCredentials = true

var endpoints = {
    api: 'http://localhost:3333/api/',
};

export default {
    getUrl(url){
        return endpoints.api + url.replace(/^\//, '');
    },
    getConfig(config){
        if(!config){
            config = {};
        }
        config.headers = $.extend({}, this.getHeaders(), config.headers);

        return config;
    },
    getHeaders(){
        return {   
            //'x-origin': window.location.host, 
            //'x-csrf-token': $('meta[name=csrf-token]').attr('content'),
        };
    },
    get(url, data, config){
        config = this.getConfig(config);
        url = this.getUrl(url);

        if( Object.entries(data || {}).length ){
            if( url.indexOf('?') < 0){
                url += '?';
            }
            url += qs.stringify(data);
        }
        return axios.get(url, config)
            .then(function(result){
                return result.data;
            })
            .catch(function (err) {
                return err.response.data || {status: 'failed', message: err.message}
            });
    },
    post(url, data, config){
        url = this.getUrl(url);
        config = this.getConfig(config);
        
        return axios.post(url, data, config).then(result => {
            return result.data;
        }).catch(err => {
            return err.response.data || {status: 'failed', message: err.message}
        })
    },
    upload(url, data, config){
        url = this.getUrl(url);
        if(!config){
            config = {
                headers: {},
            };
        }
        config.headers = Object.assign({}, {'Content-Type': 'multipart/form-data'}, config.headers)

        let formData = new FormData;

        Object.entries(data).forEach(entry => {
            formData.append(entry[0], entry[1]);
        })
        
        return axios.post(url, formData, config).then(result => {
            return result.data;
        }).catch(err => {
            return err.response.data || {status: 'failed', message: err.message}
        })
    },

    getTasks(){
        return this.get('tasks')
    },
    addTask(data){
        return this.post('tasks/add', data)
    },
    deleteTask(taskId){
        return this.post('tasks/delete/' + taskId)
    },
    toggleTaskCompleted(taskId, data){
        return this.post('tasks/toggleCompleted/' + taskId, data);
    },

    getUserByEmail(email){
        return this.get('users/by-email', {email: email})
    },
    createUser(data){
        return this.post('users/create', data)
    },
    updateUser(data){
        return this.upload('users/update', data)
    },
    getUserCategories(id){
        return this.get('users/categories', {id_user: id})
    },
    getUsers(){
        return this.get('users/all')
    },
    getUserSuggestions(id){
        return this.get('users/' + id + '/suggestions')
    },
    addUserFriend(id_user, id_friend){
        return this.post('users/' + id_user + '/addFriend', {id_friend: id_friend})
    },
    removeUserFriend(id_user, id_friend){
        return this.post('users/' + id_user + '/removeFriend', {id_friend: id_friend})
    },

    sessionGet(){
        return this.post('session/get', {nothing: true})
    },
    sessionSet(data){
        return this.post('session/set', data)
    },
    sessionClear(){
        return this.post('session/clear')
    },

    getCategories(){
        return this.get('categories/all')
    },
    addCategory(categoryName, id_user){
        return this.post('categories/add', {categoryName: categoryName, id_user: id_user})
    },
    deleteCategory(id_category, id_user){
        return this.post('categories/delete/' + id_category, {id_user: id_user})
    },
    addCategoryLike(id_category, id_user){
        return this.post('categories/like/' + id_category, {id_user: id_user})
    }
}
