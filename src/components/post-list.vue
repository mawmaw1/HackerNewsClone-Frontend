<template>
    <div id="post-list-container">
        <loading v-if="loading"></loading>
        <ul v-if="contentReady" id="post-list">
            <post-list-item v-for="(post, index) in posts" :index="index + (25 * (page-1))" :post="post" :key="post.id"></post-list-item>
        </ul>
        <div v-if="contentReady" class="page-nav">
            <button id="prevBtn" v-on:click="page--" :disabled="this.page == 1">previous page</button>
            <button id="nextBtn" v-on:click="page++">next page</button>
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
        data () {
            return {
                loading: false,
                contentReady: false,
                displayError: false,
                page: 1,
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
        watch: {
            page(val){
                this.getPosts().then(_ => {
                    this.scrollToTop();
                    local.setCookie(val);
                });
            }
        },
        components: {
            postListItem, loading, error
        },
        methods: {
            getPosts(){
                this.loading = true;
                return query.getPosts(this.page).then(posts => {
                    this.posts = posts;
                    this.contentReady = true;
                }).catch(_ => {
                    this.displayError = true;
                }).then(_ => {
                    this.loading = false;
                })
            },
            scrollToTop(){
                window.scrollTo(0,80); // magic number, yay
            }
        }

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