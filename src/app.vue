<template>
    <div id="app">
        <top-bar ></top-bar>
    </div>
</template>

<script>
    import topBar from './components/top-bar.vue'

    export default {
        components: {topBar}
    }
</script>


<style rel="stylesheet/sass" lang="sass">
    $top-bar-height: 80px
    $footer-height: 120px

    #app
        display: grid
        grid-template-columns: 1fr 1fr 1fr 1fr
        grid-template-rows: $top-bar-height 1fr $footer-height
        grid-template-areas: "top top top top" "main main main main" "footer footer footer footer"
</style>