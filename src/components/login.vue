<template>
    <div id="login">
        <!--logged in-->
        <div v-if="loggedIn">
            <p>logged in as: </p>
            <a>go to profile</a>
        </div>

        <!--Not logged in-->
        <div class="login-form" v-else="loggedIn">
            <label id="login-label" for="username">login</label>
            <input v-model="username" id="username" type="text" placeholder="username">
            <input v-model="password" id="password" type="password" placeholder="password">
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loggedIn: false
            }
        },
        methods: {
            onLogin(e){
                console.log('hello')
                this.loggedIn = !this.loggedIn
            }
        }
    }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"

    #login
        grid-column: 6 / span 1
        display: grid
        margin-right: 20px
        overflow: hidden

        .login-form
            display: grid
            grid-template-columns: 1fr 1fr
            grid-template-rows: 1fr 1fr 1fr
            padding: 20px
            background: rgba(0,0,0,0.1)

            input[type="text"],
            input[type="password"]
                justify-self: center
                align-self: center
                border-bottom: 2px solid $c-grey-500
                color: $c-grey-400
                font-size: 18px
                width: 160px

            input[type=text][id*="username"]
                grid-column: 1 / 2
                grid-row: 2 / 4

            input[type=text][id*="password"]
                grid-column: 2 / 3
                grid-row: 2 / 4


            #login-label
                align-self: start
                color: $c-grey-800
                grid-column: 1 / 3
                grid-row: 1 / 2



</style>