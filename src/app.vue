<template>
    <div id="app">
        <top-bar ></top-bar>
        <post-list></post-list>
        <v-footer></v-footer>
    </div>

</template>

<script>
    import topBar from './components/top-bar.vue'
    import vFooter from './components/v-footer.vue'
    import postList from './components/post-list.vue'

    export default {
        components: {topBar, vFooter, postList }
    }
</script>

<style rel="stylesheet/sass" lang="sass">
    $top-bar-height: 80px

    #app
        width: 100%
        height: 100%
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        grid-template-rows: $top-bar-height 1fr 1fr
        grid-template-areas: "top top top top" "main main main main" "footer footer footer footer"
</style>