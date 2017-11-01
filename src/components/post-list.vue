<template>
    <div id="post-list-container">
        <loading v-if="loading"></loading>
        <ul v-if="contentReady" id="post-list">
            <post-list-item v-for="(post, index) in posts" :index="index" :post="post" :key="post.id"></post-list-item>
        </ul>
        <error v-if="displayError" :error="error"></error>
    </div>

</template>

<script>
    import mock from '../dev/mock'
    import postListItem from './post-list-item.vue'
    import loading from './loading.vue'
    import error from './error.vue'
    import query from '../modules/query'

    export default {
        data () {
            return {
                loading: false,
                contentReady: false,
                displayError: true,
                page: 1,
                error: {
                    header: 'Error',
                    text: 'Something went wrong :('
                }
            }
        },
        created(){
            this.loading = true;
            query.getPosts(this.page).then(posts => {
                this.posts = posts;
                this.loading = false;
                this.contentReady = true;
            })
        },
        components: {
            postListItem, loading, error
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