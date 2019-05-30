<template>
    <div class="page page-me-wrap">
        <default-layout>
            <div class="container">
                <h1>My Account</h1>
                <tabs></tabs>
                <hr>
                <router-view v-if="logged"></router-view>
                <div v-else>
                    <div class="alert alert-danger">You must be logged in to view this page</div>
                </div>
            </div>
        </default-layout>
    </div>
</template>

<script>

import DefaultLayout from '../../layouts/default'
import Tabs from '../../layouts/me/tabs'

export default {
    data(){
        return {
            logged: false,
        }
    },
    mounted(){
        this.logged = !!this.$root.user.id;
    },
    components: {
        DefaultLayout,
        Tabs,
    },
    watch: {
        '$root.user.id': function(id, old){
            this.logged = !!id;
        }
    }
}
</script>
