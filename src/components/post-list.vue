<template>
    <ul id="post-list">
        <post-list-item v-for="item in items" :item="item" :key="item.placement"></post-list-item>
    </ul>
</template>

<script>
    import mock from '../dev/mock'
    import postListItem from './post-list-item.vue'

    export default {
        data () {
            return {
                items: mock.getPostList(1)
            }
        },
        components: {
            postListItem
        }
    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"

    #post-list
        grid-area: main


</style>