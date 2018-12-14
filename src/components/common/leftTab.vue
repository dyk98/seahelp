<template>
    <div>
        <img :src="leftTab" alt="" class="lefttab absolute">
        <img :src="back" alt="" class="back absolute" @click="goBack">
        <img :src="home" alt="" class="home absolute" @click="goHome">
    </div>
</template>

<script>
    export default {
        name: "leftTab",
        data () {
            return {
                leftTab:'/static/leftTab.png',
                back:'/static/back.png',
                home:'/static/home.png',
            }
        },
        methods: {
            goHome () {
                this.$router.push('/')
            },
            goBack () {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .absolute {
        position: absolute;
        z-index: 2;
        left: 0;
    }

    .lefttab {
        height: 100%;
     }

    .back {
        height: 3.5%;
        top: 38.5%;
        left: 0.8%;
    }

    .home {
        height: 3.5%;
        top: 52%;
        left: 0.5%;
    }
</style>