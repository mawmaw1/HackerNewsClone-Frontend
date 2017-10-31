<script>
    //    import local from '../modules/local';

    export default {
        props: ['item'],
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        computed: {
            shortUrl(){
                const url = this.item.url;
                const regex = /(http[s]*:\/\/)(.*)+?(?=\/)/;
                return url.match(regex)[2]
            },
            domainUrl(){
                const url = this.item.url;
                const regex = /(http[s]*:\/\/.*)+?(?=\/)/;
                return url.match(regex)[1]
            }
        }
    }
</script>


<template>
    <li>
        <div class="placement">{{item.placement}}.</div>
        <div class="button-container">
            <button class="upvote"><i class="material-icons">keyboard_arrow_up</i></button>
            <button class="downvote"><i class="material-icons">keyboard_arrow_down</i></button>
        </div>
        <div class="title-and-url">
            <p><a :href="item.url">{{item.title}}</a> <span><a :href="domainUrl">({{shortUrl}})</a></span></p>
        </div>
        <div class="details">
            <p>{{item.points}} points by <a href="#">{{item.author}}</a> | <a href="#">{{item.numberOfComments}} comments</a></p>
        </div>

        <!--<button class="upvote"></button>-->
        <!--<button v-if="local.loggedIn()" class="downvote"></button>-->
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