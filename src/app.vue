<script>

    import topBar from './components/top-bar.vue'
    import vFooter from './components/v-footer.vue'
    import postList from './components/post-list.vue'
    import login from './components/login.vue'

    export default {
        components: {topBar, vFooter, postList, login },
        created(){
            this.$router.addRoutes([
                {
                    path: '/',
                    name: 'Posts',
                    component: postList
                },
                {
                    path:'/login',
                    name: 'Login',
                    component: login
                }
            ])
        }
    }
</script>

<template>
    <div id="app">
        <top-bar ></top-bar>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>

</template>


<style rel="stylesheet/sass" lang="sass">
    $top-bar-height: 80px
    $footer-height: 120px

    #app
        width: 100%
        height: 100%
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        grid-template-rows: $top-bar-height 1fr $footer-height
        grid-template-areas: "top top top top" "main main main main" "footer footer footer footer"
</style>