<template>
    <div id="v-footer">
        <p>Kristoffer Noga</p>
        <p>Christopher Borum</p>
        <p>Magnus Larsen</p>
        <p>Kristian Nielsen</p>
    </div>
</template>

<script>
    export default { }
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
    @import "../style/colors"

    #v-footer
        grid-area: footer
        align-self: end

        /*height: 120px*/
        height: 100%
        display: grid
        grid-template-columns: repeat(4, 1fr)
        grid-template-rows: 1fr

        p
            color: $c-grey-500
            align-self: center
            justify-self:  center
            font-family: 'Open Sans', sans-serif
            font-size: 20px


</style>