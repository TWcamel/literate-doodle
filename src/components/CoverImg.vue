<template>
    <div
        id="CoverImg"
        :style="{
            background: coverImg
        }"
    >
    </div>
</template>

<script>
export default {
    data() {
        return {
            coverImg: `url(${require("@/assets/CoverImg.png")})`
        }
    }
}
</script>

<style scoped>
#CoverImg {
    width: 100vw;
    height: 1300px;
    background-position: center !important;
    background-size: cover !important;
}
</style>
