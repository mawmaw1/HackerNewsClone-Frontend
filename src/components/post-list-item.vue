<script>
    //    import local from '../modules/local';

    export default {
        props: ['post', 'index'],
        computed: {
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

</script>


<template>
    <li>
        <div class="placement">{{properIndex}}.</div>
        <div class="button-container">
            <button class="upvote"><i class="material-icons">keyboard_arrow_up</i></button>
            <button class="downvote"><i class="material-icons">keyboard_arrow_down</i></button>
        </div>
        <div class="title-and-url">
            <p><a :href="post.url">{{post.title}}</a> <span><a :href="domainUrl">({{shortUrl}})</a></span></p>
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
                font-size: 18px
                a
                    color: $c-blue-600

                a:visited
                    color: $c-purple-600

            span
                font-size: 14px

                a
                    color: $c-grey-700

                a:visited
                    color: $c-grey-700

        .details
            font-size: 14px
            color: $c-grey-700

            a, a:visited
                color: $c-grey-600


</style>