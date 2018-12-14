<template>
    <div>
        <img :src="background" class="background">
    </div>
</template>

<script>
    export default {
        name: "background",
        data() {
            return {
                background:'/static/background.png'
            }
        }
    }
</script>

<style scoped>
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>