<script>
    export default {

    }
</script>

<template>
    <div id="loading">
        <div class="loader"></div>
        <div class="load-text">loading...</div>
    </div>
</template>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import '../style/colors'

    #loading
        grid-area: main
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr 1fr

        .loader
            pointer-events: none
            opacity: 1
            transition: 0.13s ease-in
            border: 2px solid rgba(0,0,0,0.035)
            border-radius: 50%
            border-top: 2px solid $c-green-600
            width: 50px
            height: 50px
            -webkit-animation: spin 1s linear infinite
            animation: spin 1s linear infinite
            grid-column: 1 / 3
            grid-row: 1 / 2
            justify-self: center
            align-self: end
            margin-bottom: 5px



        .load-text
            margin-top: 5px
            grid-column: 1 / 3
            grid-row: 2 / 3
            justify-self: center
            align-self: start
            color: $c-grey-700
            -webkit-animation: animate-text 1s linear infinite
            animation: animate-text 1s linear infinite


    @-webkit-keyframes spin
        0%
            -webkit-transform: rotate(0deg)
        100%
            -webkit-transform: rotate(360deg)

    @keyframes spin
        0%
            transform: rotate(0deg)
        100%
            transform: rotate(360deg)

    @keyframes animate-text
        30%
            color: $c-grey-700
        50%
            color: $c-green-800
        70%
            color: $c-grey-700


</style>