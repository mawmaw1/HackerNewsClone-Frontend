<script>
    export default {
        props: ['error']
    }
</script>

<template>
    <div id="error">
        <div class="header">{{error.header}}</div>
        <div class="text">{{error.text}}</div>
    </div>
</template>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import '../style/colors'

    #error
        height: 100%
        grid-area: main
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr 1fr

        .header
            grid-column: 1 / 3
            grid-row: 1 / 2
            justify-self: center
            align-self: end
            margin-bottom: 10px

        .text
            grid-column: 1 / 3
            grid-row: 2 / 3
            justify-self: center
            align-self: start
            margin-top: 10px

        .header
            color: $c-red-600

        .text
            color: $c-grey-600

</style>