<template>
    <div id="top-bar">
        <div id="logo">HakkeNyheder</div>
        <a href="#" id="posts" class="nav">Posts</a>
        <a href="#" id="submit" class="nav">Submit</a>
        <div class="login"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'HakkeNyhedern'
            }
        }
    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"

    ._bottom-padding
        margin-bottom: 20px

    #top-bar
        height: 100%

        grid-area: top
        display: grid
        grid-template-columns: 3fr repeat(4, 1fr) 2fr
        border-bottom: 1px solid $c-grey-800

        #logo
            @extend ._bottom-padding
            font-family: Raleway, sans-serif
            justify-self: center
            align-self: end
            font-size: 40px
            line-height: .95
            color: $c-grey-700

        .nav
            @extend ._bottom-padding
            justify-self: start
            align-self: end

            font-family: 'Open Sans', sans-serif
            font-size: 20px
            color: $c-grey-500
            border-bottom: 1px solid transparent

        .nav:hover
            border-bottom: 1px solid $c-green-700
            color: $c-grey-600

</style>