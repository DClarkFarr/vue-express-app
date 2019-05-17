<template>
    <div class="view-app default">
        <default-header>
            <default-menu-links></default-menu-links>
            <ul v-if="userLogged" class="navbar-nav align-items-center ml-auto">
                <li class="nav-item mr-3"><small>Welcome, {{userName}}</small></li>
                <li class="nav-item">
                    <a v-on:click.prevent="logout" class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </default-header>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import defaultHeader from './default/header';
import defaultMenuLinks from './default/menuLinks';

export default {
    methods: {
        logout(){
            this.$root.user.logout();
        }
    },
    computed: {
        userName(){
            return this.$root.user.name;
        },
        userLogged(){
            return !!this.$root.user.logged;
        }
    },
    components: {
        defaultHeader,
        defaultMenuLinks,
    },
}
</script>