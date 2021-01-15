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
    width: var(--mainPageViewWidth);
    height: 50em;
    background-position: center !important;
    background-size: cover !important;
}
</style>
