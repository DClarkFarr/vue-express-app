<template>
    <div class="friend mb-3 p-3 bg-white d-flex w-100 align-items-center">
        <div class="name mr-3">
            {{friend.name}}
        </div>
        <div class="actions ml-auto">
            <slot name="actions">
                No Button here
            </slot>
        </div>
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
