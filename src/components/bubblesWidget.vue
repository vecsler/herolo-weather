<template>
    <div id="bubbles">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
    </div>


</template>

<script>
    export default {


        methods: {}
    }
</script>

<style lang="scss" scoped>
    body {
        overflow: hidden;
        height: 100%;
    }

    #bubbles {
        padding: 100px 0;
        height: 100%
    }

    .bubble {
        width: 60px;
        height: 60px;
        background: #1872b3;
        border-radius: 200px;
        -moz-border-radius: 200px;
        -webkit-border-radius: 200px;
        position: absolute;
    }

    .x1 {
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        transform: scale(0.9);
        opacity: 0.2;
        -webkit-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;
        -moz-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;
        -o-animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;
    }

    .x2 {
        left: 200px;
        -webkit-transform: scale(0.6);
        -moz-transform: scale(0.6);
        transform: scale(0.6);
        opacity: 0.5;
        -webkit-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;
        -moz-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;
        -o-animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;
    }

    .x3 {
        left: 350px;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0.3;
        -webkit-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
        -moz-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
        -o-animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    }

    .x4 {
        left: 470px;
        -webkit-transform: scale(0.75);
        -moz-transform: scale(0.75);
        transform: scale(0.75);
        opacity: 0.35;
        -webkit-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
        -moz-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
        -o-animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
    }

    .x5 {
        left: 150px;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0.3;
        -webkit-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -moz-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -o-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
    }

    .x6 {
        left: 600px;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0.3;
        -webkit-animation: moveclouds 9s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -moz-animation: moveclouds 9s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -o-animation: moveclouds 9s linear infinite, sideWays 1s ease-in-out infinite alternate;
    }

    .x7 {
        left: 100px;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0.3;
        -webkit-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -moz-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
        -o-animation: moveclouds 7s linear infinite, sideWays 1s ease-in-out infinite alternate;
    }

    @-webkit-keyframes moveclouds {
        0% {
            top: 500px;
        }
        100% {
            top: -500px;
        }
    }

    @-webkit-keyframes sideWays {
        0% {
            margin-left: 0px;
        }
        100% {
            margin-left: 50px;
        }
    }

    @-moz-keyframes moveclouds {
        0% {
            top: 500px;
        }

        100% {
            top: -500px;
        }
    }

    @-moz-keyframes sideWays {
        0% {
            margin-left: 0px;
        }
        100% {
            margin-left: 50px;
        }
    }

    @-o-keyframes moveclouds {
        0% {
            top: 500px;
        }
        100% {
            top: -500px;
        }
    }

    @-o-keyframes sideWays {
        0% {
            margin-left: 0px;
        }
        100% {
            margin-left: 50px;
        }
    }

</style>
