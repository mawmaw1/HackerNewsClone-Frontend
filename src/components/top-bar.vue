<template>
    <div id="top-bar">
        <div id="logo">HakkeNyheder</div>
        <router-link to="/" id="postsNav" class="nav"><p>Posts</p></router-link>
        <a href="#" id="submit" class="nav"><p>Submit</p></a>
        <router-link to="/login" id="loginNav" class="nav"><p>Login</p></router-link>
    </div>
</template>

<script>
    import login from './login.vue'

    export default {
        components: {login},
        data() {
            return {
                title: 'HakkeNyhedern'
            }
        }
    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"


    #top-bar
        height: 100%
        grid-area: top
        display: grid
        grid-template-columns: 3fr repeat(4, 1fr) 2fr
        grid-template-rows: 1fr
        border-bottom: 1px solid $c-grey-800

        #logo
            margin-bottom: 20px
            font-family: Raleway, sans-serif
            justify-self: center
            align-self: end
            font-size: 40px
            font-weight: 200
            line-height: .95
            color: $c-grey-700

        #loginNav
            grid-column: 6 / 7
            grid-row: 1 / 2

        .nav
            margin-bottom: 10px
            justify-self: start
            align-self: end
            padding: 10px 20px

        p
            font-family: 'Open Sans', sans-serif
            font-size: 20px
            color: $c-grey-500
            border-bottom: 1px solid transparent

        .nav:hover p
            border-bottom: 1px solid $c-green-700
            color: $c-grey-600

</style>