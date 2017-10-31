<template>
    <div id="post-list-container">
        <loading v-if="loading"></loading>
        <ul v-if="contentReady" id="post-list">
            <post-list-item v-for="item in items" :item="item" :key="item.placement"></post-list-item>
        </ul>
    </div>

</template>

<script>
    import mock from '../dev/mock'
    import postListItem from './post-list-item.vue'
    import loading from './loading.vue'
    import query from '../modules/query'

    export default {
        data () {
            return {
                loading: false,
                contentReady: false,
                page: 1
//                items: mock.getPostList(5)
            }
        },
        created(){
            query.getPosts()
        },
        components: {
            postListItem, loading
        }

    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"
    @import "../style/dev"
    @import '../style/loader'

    #post-list-container
        grid-area: main

        .loading, #post-list
            width: 100%
            height: 100%







</style>