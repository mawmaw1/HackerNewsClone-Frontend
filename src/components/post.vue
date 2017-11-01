<script>
    import mock from '../dev/mock'
    import loading from './loading.vue'
    import error from './error.vue'
    import query from '../modules/query'
    import _ from '../modules/extensions'

    const postTranslator = _.getTranslator({
        '_id': 'id',
        'username': 'username',
        'post_type': 'type',
        'pwd_hash': 'passwordHash',
        'post_title': 'title',
        'post_url': 'url',
        'post_parent': 'parent',
        'hanesst_id': 'hanesstId',
        'post_text': 'text',
        'created_at': 'createdAt',
        'points':'points',
        '__v': '__v',
        'comments': 'comments'
    });

    export default {
        components: {
            loading, error
        },
        data(){
            return {
                loading: false,
                contentReady: false,
                displayError: false,
                postId: this.$route.params.postId,
                error: {
                    header: 'Error',
                    text: 'Something went wrong :('
                }
            }
        },
        computed: {
            post(){
                return postTranslator(this._post);
            },
            shortUrl(){
                let returnValue = '';
                const url = this.post.url;
                const regex = /(http[s]*:\/\/[www.]*)(.+?(?=[/|\\]))/;
                const match = url.match(regex);
                if(match !== null && match.length > 2){
                    returnValue = url.match(regex)[2];
                }

                return returnValue;
            },
            domainUrl(){
                let returnValue = '';
                const url = this.post.url;
                const regex = /(http[s]*:[/][/])*(.+?(?=[/|\\]))/;
                const match = url.match(regex);
                if(match !== null && match.length > 0){
                    returnValue = url.match(regex)[0];
                }

                return returnValue;
            },
            numberOfComments(){
                return this.comments.length || 0;
            }
        },
        created(){
            this.getPost()
        },
        methods: {
            getPost(){
                this.loading = true;
                return query.getPost(this.postId).then(response => {
                    this._post = response.post;
                    this.comments = response.comments;
                    this.contentReady = true;
                }).catch(_ => {
                    this.displayError = true;
                }).then(_ => {
                    this.loading = false;
                })
            }
        }
    }
</script>


<template>
    <div id="post">
        <loading v-if="loading"></loading>
        <error v-if="displayError" :error="error"></error>
        <div id="content" v-if="contentReady">
            <div class="post-details">
                <p class="title">{{post.title}} <span><a :href="domainUrl">({{shortUrl}})</a></span></p>
                <p class="author">user: <span>{{post.username}}</span></p>
                <p>{{post.points}} points</p>


            </div>
            <div class="comment-section">
                <h1>Comments <span>({{numberOfComments}})</span></h1>
            </div>
        </div>

    </div>
</template>


<style rel="stylesheet/sass" lang="sass" scoped>

    @import '../style/colors'


    #post
        grid-area: main
        width: 100%
        height: 100%
        padding: 20px

    .post-details
        border-bottom: 1px dotted $c-grey-700
        padding-bottom: 10px

        .title
            font-size: 24px

            span
                font-size: 18px

                a
                    color: $c-grey-700


    .comment-section
        margin-top: 15px

        h1
            span
                color: $c-grey-700



</style>