<script>
    //    import local from '../modules/local';


    export default {
        props: ['post', 'index'],
        computed: {
            shortUrl(){
                return tryMatch(this.post.url, /(http[s]*:\/\/[www.]*)(.+?(?=[/|\\]))/);
            },
            domainUrl(){
                return tryMatch(this.post.url, /(http[s]*:[/][/])*(.+?(?=[/|\\]))/);
            },
            properIndex(){
                return this.index + 1;
            },
            numberOfComments(){
                return this.post.comments.length || 0;
            }
        },
        methods: {
            navigateToPost(){
                this.$router.push({
                    name: 'Post',
                    params: {
                        postId: this.post.id
                    }
                })
            }
        }
    }

    function tryMatch(url, regex){
        if(!url){
            return "";
        }

        let returnValue = '';

        const match = url.match(regex);
        if(match !== null && match.length > 2){
            returnValue = url.match(regex)[2];
        }

        return returnValue;
    }

</script>


<template>
    <li>
        <div class="placement">{{properIndex}}.</div>
        <div class="button-container">
            <button class="upvote"><i class="material-icons">keyboard_arrow_up</i></button>
            <button class="downvote"><i class="material-icons">keyboard_arrow_down</i></button>
        </div>
        <div class="title-and-url">
            <p>
                <a class="url" :href="domainUrl">({{shortUrl}})</a>
                <a class="title" :href="post.url">{{post.title}}</a>
            </p>
        </div>
        <div class="details">
            <p>{{post.points}} points by <a href="#">{{post.username}}</a> | <a href="#" v-on:click="navigateToPost">{{numberOfComments}} comments</a></p>
        </div>
    </li>
</template>

<!--  119 points by riboflavin 3 hours ago | hide | 49 comments  -->

<style rel="stylesheet/sass" lang="sass" scoped>
    @import '../style/dev'
    @import '../style/colors'

    $item-height: 56px
    $placement-width: 40px
    $button-container-width: 40px

    li
        padding: 3px
        height: $item-height
        display: grid
        grid-template-columns: $placement-width $button-container-width 1fr
        grid-template-rows: 1fr 1fr
        border-bottom: dotted 1px $c-grey-900

        .placement
            grid-column: 1 / 2
            grid-row: 1 / 3
            justify-self: center
            align-self: center

        .button-container
            grid-column: 2 / 3
            grid-row: 1 / 3
            display: grid
            grid-template-columns: 1fr
            grid-template-rows: 1fr 1fr

            .upvote, .downvote
                align-self: center
                justify-self: center


        .title-and-url
            align-self: center

            p
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                max-width: 100%
                display: inline-block

                font-size: 18px
                .title

                    color: $c-blue-600

                .title:visited
                    color: $c-purple-600





                .url
                    margin: 4px 0 0 4px
                    float: right
                    font-size: 14px
                    color: $c-grey-700

                .url:visited
                    color: $c-grey-700

        .details
            font-size: 14px
            color: $c-grey-700

            a, a:visited
                color: $c-grey-600


</style>