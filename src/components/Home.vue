<template>
    <div style="overflow: hidden;position: absolute;z-index: -1;height: 100%;width: 100%">
        <Background />
        <left-tab />
        <div>
            <img :src="close" alt="" class="close absolute">
        </div>
        <div>
            <img :src="centerbig" alt="" class="centerbig absolute">
        </div>
        <div>
            <img src="/static/magic.png" alt="" class="magic absolute">
        </div>
        <div>
            <img src="/static/soujiuyewu.png" alt="" class="absolute soujiuyewu">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="lingdao absolute circle">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="rongyu absolute circle">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="pufa absolute circle">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="zuzhi absolute circle">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="soujiu absolute circle">
        </div>
        <div>
            <img src="/static/circle.png" alt="" class="zhidu absolute circle">
        </div>
        <div>
            <img src="/static/rongyujiaoliu.png" alt="" class="absolute jiaoliu">
        </div>
        <div>
            <img src="/static/pufazhishi.png" alt="" class="absolute zhishi">
        </div>
        <div>
            <img src="/static/center.png" alt="" class="absolute zhongxin">
        </div>
        <!--<div>-->
            <!--<img src="/static/line.png" alt="" class="absolute line">-->
        <!--</div>-->
        <!--<div>-->
            <!--<img src="/static/light.png" alt="" class="absolute light">-->
        <!--</div>-->
        <div>
            <img src="/static/circle5.png" alt="" class="absolute line">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data () {
            return {
                close:'/static/close.png',
                centerbig:'/static/centerbig.png',
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .close {
        top: 0;
        right: 0;
        height: 10%;
    }

    .absolute {
        position: absolute;
        z-index: 2;
    }

    .centerbig {
        z-index: 3;
        height: 38%;
        top: 32.84%;
        left: 41.01%;
    }

    .magic {
        z-index: 2;
        width: 30%;
        top: 20%;
        left: 35%;
    }

    .soujiuyewu {
        z-index: 3;
        width: 20%;
        bottom:3%;
        left: 40.5%;
    }

    .circle {
        z-index: 3;
        height: 17%;
    }

    .lingdao {
        top: 12%;
        left: 13%;
    }

    .rongyu {
        top: 43%;
        left: 28%;
    }

    .zuzhi {
        left: 10%;
        top: 69%;
    }

    .pufa {
        top: 10%;
        right: 20%;
    }

    .zhidu {
        right: 21%;
        top: 43%;
    }

    .soujiu {
        bottom: 10%;
        left: 46.3%;
    }

    .jiaoliu {
        width: 20%;
        left: 22%;
        top: 31%;
    }

    .zhishi {
        width: 20%;
        right: 15.3%;
        top: 1.8%;
    }

    .zhongxin {
        height: 17%;
        right: 12%;
        bottom: 11%;
    }

    .line {
        z-index: 3;
        height: 100%;
        left: 16.5%;
        top: 0%;
    }

    .light {
        z-index: 3;
        height: 100%;
        left: 14%;
        top: 4%;
    }
</style>