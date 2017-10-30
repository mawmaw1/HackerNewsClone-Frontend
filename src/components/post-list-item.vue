<template>
    <li class="">
        <div class="placement">{{data.placement}}</div>
        <!--<button class="upvote"></button>-->
        <!--<button v-if="local.loggedIn()" class="downvote"></button>-->

    </li>
</template>

<script>
    import local from '../modules/local';

    export default {
        props: ['data'],

    }
</script>

<style>



</style>