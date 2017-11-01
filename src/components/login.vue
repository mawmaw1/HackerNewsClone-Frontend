<script>
    const query = require('../modules/query')

    export default {
        data(){
            return {
                login: {
                    username: '',
                    password: ''
                },
                register: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitLogin(){
                const username = this.login.username;
                const password = this.login.password;

                query.login(username, password)
                        .then(_ => {
                            this.$router.push('/')
                        })
                        .catch(_ => {
                            alert('Wrong username or password')
                        })
            },
            submitRegister(){
                const username = this.login.username;
                const password = this.login.password;

                query.login(username, password)
                        .then(_ => {
                            this.$router.push('/')
                        })
                        .catch(_ => {
                            alert('Wrong username or password')
                        })
            }
        },
        computed: {
            disableLoginBtn(){
                const shortest = Math.min(this.login.username.length, this.login.password.length);
                return !(shortest > 0);
            },
            disableRegisterBtn(){
                const shortest = Math.min(this.register.username.length, this.register.password.length);
                return !(shortest > 0);
            }
        }
    }
</script>

<template>
    <div id="login">
        <div class="login-form">
            <h1>Login</h1>
            <div class="input-container">
                <p v-if="login.username.length === 0">username</p>
                <input v-model="login.username" type="text">
            </div>
            <div class="input-container">
                <p v-if="login.password.length === 0">password</p>
                <input v-model="login.password" type="password">
            </div>
            <button v-on:click="submitLogin" id="loginBtn" class="submit" :disabled="disableLoginBtn">go</button>
        </div>

        <div class="register-form">
            <h1>Register</h1>
            <div class="input-container">
                <p v-if="register.username.length === 0">username</p>
                <input v-model="register.username" type="text">
            </div>
            <div class="input-container">
                <p v-if="register.password.length === 0">password</p>
                <input v-model="register.password" type="password">
            </div>
            <button v-on:click="submitRegister" id="registerBtn" class="submit" :disabled="disableRegisterBtn">register</button>
        </div>
    </div>
</template>



<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"
    @import "../style/functions"
    @import "../style/dev"


    #loginBtn
        @include button($c-green-700)

    #registerBtn
        @include button($c-orange-700)



    #login
        padding: 25px

        button
            margin: 15px 5px

        h1
            font-family: Raleway, sans-serif
            font-weight: 200
            margin-bottom: 20px

        .login-form
            padding: 20px 0
            border-bottom: 1px dotted $c-grey-800

        .register-form
            padding: 20px 0

        .input-container
            position: relative


            p
                position: absolute
                font-size: 18px
                /*line-height: 1*/
                pointer-events: none
                color: $c-grey-600

            input[type=text], input[type=password]
                border-bottom: 1px solid $c-grey-600
                font-size: 18px
                line-height: 1.5
                font-family: 'Open Sans', sans-serif
                color: $c-grey-400

                &:focus
                    border-bottom: 1px solid $c-grey-800

            p, input[type="text"], input[type="password"]
                margin: 10px
                padding: 0px 5px






</style>