<template>
    <div class="friend mb-3 p-3 bg-white d-flex w-100 align-items-center">
        <div class="name mr-3">
            {{friend.name}}
        </div>
        
        <slot name="actions">
            <div class="actions ml-auto">
                No Button here
            </div>
        </slot>
       
    </div>
</template>

<script>
export default {
    props: ['friend'],
    data(){
        return {

        }
    },
}
</script>
