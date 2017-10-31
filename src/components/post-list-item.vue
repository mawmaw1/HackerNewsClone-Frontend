<script>
    //    import local from '../modules/local';
    import upvoteIcon from '../assets/icons/upvote.svg';
    console.log('upvoteIcon:', upvoteIcon);

    export default {
        props: ['item'],
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        computed: {
            shortUrl(){
                const url = this.url;

                return
            }
        }
    }
</script>


<template>
    <li>
        <div class="placement">{{item.placement}}.</div>
        <div class="button-container">
            <button class="upvote">up</button>
            <button class="downvote">down</button>
        </div>
        <div class="title-and-url">
            <p>{{item.title}} <span></span></p>
        </div>

        <!--<button class="upvote"></button>-->
        <!--<button v-if="local.loggedIn()" class="downvote"></button>-->
    </li>
</template>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import '../style/dev'

    $item-height: 60px
    $placement-width: 40px
    $button-container-width: 40px

    li
        @extend ._dev
        height: $item-height
        display: grid
        grid-template-columns: $placement-width $button-container-width 1fr
        grid-template-rows: 1fr 1fr

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






</style>