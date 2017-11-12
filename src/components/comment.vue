<script>

    const Time = require('../modules/time');

    export default {

        computed: {
            postAge() {
                const createdAt = this.post.created_at;
                if(!createdAt){
                    return "";
                }
                const createdAtDate = new Date(createdAt);
                const diffInMs = new Date().getTime() - createdAtDate.getTime();

                const time = new Time(diffInMs);

                return time.highestUnitToString();
            }
        },
        props: ['post']
    }
</script>


<template>
    <div class="comment">
        <div class="vote-section">
            <button class="vote"><i class="material-icons">keyboard_arrow_up</i></button>
            <p class="score">{{post.points}}</p>
            <button class="vote"><i class="material-icons">keyboard_arrow_down</i></button>
        </div>
        <div class="content">
            <div class="user-and-post-age">
                <p class="user">{{post.username}} - <span class="post-age">{{postAge}} age</span></p>

            </div>
            <p class="comment-text">{{post.post_text}}</p>

        </div>

    </div>
</template>


<style rel="stylesheet/sass" lang="sass" scoped>

    @import '../style/dev'
    @import '../style/colors'


    .comment

        display: grid
        grid-template-columns: 30px 1fr
        grid-template-rows: 1fr
        padding-bottom: 5px
        border-bottom: 1px dotted $c-grey-900

        .vote-section
            padding: 5px 0
            display: grid
            grid-template-columns: 1fr
            grid-template-rows: repeat(3, 25px)

            *
                justify-self: center
                align-self: center

        .content

            display: grid
            grid-template-columns: 1fr
            grid-template-rows: 30px 1fr
            padding-left: 5px

            .user-and-post-age, .comment-text
                padding: 5px

            .user-and-post-age
                .user
                    font-size: 12px

                .post-age
                    color: $c-grey-700

            .comment-text



</style>