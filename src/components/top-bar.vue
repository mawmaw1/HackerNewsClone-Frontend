<template>
    <div id="top-bar">
        <router-link to="/" id="logo">Hacker News</router-link>
        <router-link to="/" id="postsNav" class="nav"><p>Posts</p></router-link>
        <!--<a href="#" id="submit" class="nav"><p>Submit</p></a>-->
        <router-link to="/submit" id="submitNav" class="nav"><p>Submit</p></router-link>
        <router-link v-if="!loggedIn" to="/login" id="loginNav" class="nav"><p>Login</p></router-link>
        <div class="nav" v-if="loggedIn" id="username">{{username}}</div>
    </div>
</template>

<script>
    import login from './login.vue'
    import query from '../modules/query'

    export default {

        data() {
            return {
                username: null
            }
        },
        mounted(){
            query.ping()
                .then(body => {
                    if (body.data === 'pong') {
                        return
                    }
                    this.username = body.data.username;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        computed: {
            loggedIn(){
                return (this.username && this.username !== '');
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
        grid-template-columns: 400px repeat(2, 120px) 1fr
        grid-template-rows: 1fr

        border-bottom: 1px solid $c-grey-800

        #logo
            margin-bottom: 20px
            font-family: Raleway, sans-serif
            justify-self: start
            align-self: end
            font-size: 40px
            font-weight: 200
            line-height: .95
            color: $c-grey-700
            padding-left: 50px
            
        #loginNav, #username

            justify-self: end
            margin-right: 25px

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