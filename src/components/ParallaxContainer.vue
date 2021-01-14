<template>
    <div>
        <div id="ParallaxContainer">
            <div
                v-for="(item, idx) in parallax"
                :key="idx"
                :style="{ background: item }"
            ></div>
        </div>
        <div id="ParallaxContainer">
            <div
                v-for="(item, idx) in parallax"
                :key="idx"
                :style="{ background: item }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            parallax: [
                `url(${require("@/assets/parallax-1.png")})`,
                `url(${require("@/assets/parallax-2.png")})`,
                `url(${require("@/assets/parallax-3.png")})`,
                `url(${require("@/assets/parallax-4.png")})`,
                `url(${require("@/assets/parallax-5.png")})`,
            ]
        }
    }
}
</script>

<style scoped>
#ParallaxContainer {
    display: block;
    height: 900px;
}

#ParallaxContainer div {
    background-size: cover !important;
    position: fixed;
    top: 0;
    background-position: center !important;
    transform: translateY(0px);
    height: 900px;
    width: 100%;
}
</style>
