<template>
    <div class="status-button text-center">
        <div v-if="hasUser">
            <div class="badge" :class="badgeClass">{{badgeText}}</div>
        </div>

        <div v-if="status == 'friends' || status == 'sent'">
            <button class="btn btn-sm btn-danger" v-on:click="onUnfriend" :disabled="!hasUser || submitting"><i class="fa fa-times"></i></button>
        </div>
        <div v-else>
            <button class="btn btn-sm btn-primary" v-on:click="onAddFriend" :disabled="!hasUser || submitting"><i class="fa fa-plus"></i></button>
        </div>
        
    </div>
</template>


<script>
export default {
    props: ['friend'],
    data(){
        return {
            submitting: false
        }
    },
    methods: {
        onAddFriend(){
            this.submitting = true;
            this.$root.user.addFriend(this.friend.id).then(() => {
                this.submitting = false;
            })
        },
        onUnfriend(){
            this.submitting = true;
            this.$root.user.unfriend(this.friend.id).then(() => {
                this.submitting = false;
            })
        },
        getStatus(){
            let badgeClass = 'badge-secondary',
                badgeText = 'not friends',
                status = 'not',
                user = this.$root.user,
                friend = this.friend,
                hasFriend = function(f1, f2){
                    return f1.friend_ids.indexOf(f2.id) > -1
                };

            if(hasFriend(user, friend) && hasFriend(friend, user) ){
                badgeClass = 'badge-success'
                badgeText = "friends"
                status = 'friends'
            }else if( hasFriend(user, friend) ){
                badgeClass = 'badge-warning'
                badgeText = 'invite sent'
                status = 'sent'
            }else if( hasFriend(friend, user) ){
                badgeClass = 'badge-info'
                badgeText = 'invite recieved'
                status = 'recieved'
            }

            return {
                badgeClass: badgeClass,
                badgeText: badgeText,
                status: status,
            }
        }
    },
    computed: {
        badgeClass(){
            return this.getStatus().badgeClass
        },
        badgeText(){
            return this.getStatus().badgeText
        },
        status(){ 
            return this.getStatus().status
        },
        hasUser(){
            return !!this.$root.user.id
        }
    }
}
</script>
