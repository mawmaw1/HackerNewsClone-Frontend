<template>
    <div id="post-list-container">
        <loading v-if="loading && !contentReady"></loading>
        <ul v-if="contentReady" id="post-list">
            <post-list-item v-for="(post, index) in posts" :index="index + (25 * (displayedPage - 1))" :post="post" :key="post.id"></post-list-item>
        </ul>
        <div v-if="contentReady" class="page-nav">
            <button id="prevBtn" v-on:click="prevPage" :disabled="this._page == 1 || this.loading">previous page</button>
            <button id="nextBtn" v-on:click="nextPage" :disabled="this.loading">next page</button>
        </div>
        <error v-if="displayError" :error="error"></error>
    </div>
</template>

<script>
    import mock from '../dev/mock'
    import postListItem from './post-list-item.vue'
    import loading from './loading.vue'
    import error from './error.vue'
    import query from '../modules/query'

    const local = require('../modules/local');

    export default {
        components: {
            postListItem, loading, error
        },
        data () {
            return {
                loading: false,
                contentReady: false,
                displayError: false,
                displayedPage: 1,
                error: {
                    header: 'Error',
                    text: 'Something went wrong :('
                }
            }
        },
        created(){
            this.getPosts();
            console.log(this.$root.loggedIn);
        },
        computed: {
            _page(){
                return Number(this.$route.params.page);
            }
        },
        watch: {
            '$route'(){
                this.getPosts();
            },
            displayedPage(){
                this.scrollToTop();
            }
        },
        methods: {
            getPosts(page = this._page){
                this.loading = true;
                return query.getPosts(page).then(posts => {
                    this.posts = posts;
                    this.contentReady = true;
                    this.updateRouterWithPage(page);
                    this.displayedPage = page;
                }).catch(_ => {
                    this.displayError = true;
                }).then(_ => {
                    this.loading = false;
                })
            },
            updateRouterWithPage(page){
                this.$router.push({
                    name: 'Posts',
                    params: {
                        page: page
                    }
                });
            },
            nextPage(){
                const page = this._page + 1;
                this.$router.push({
                    name: 'Posts',
                    params: {
                        page: page
                    }
                });
            },
            prevPage(){
                const page = this._page - 1;
                this.$router.push({
                    name: 'Posts',
                    params: {
                        page: page
                    }
                });
            },
            scrollToTop(){
                window.scrollTo(0,0);
            }
        },
        props: ['page']
    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"
    @import "../style/dev"
    @import '../style/loader'
    @import '../style/functions'

    #post-list-container
        grid-area: main

        .loading, #post-list
            width: 100%
            height: 100%

        .page-nav
            width: 100%
            padding: 10px

            #prevBtn
                @include button($c-blue-700)

            #nextBtn
                margin-left: 10px
                @include button($c-blue-700)
</style>


