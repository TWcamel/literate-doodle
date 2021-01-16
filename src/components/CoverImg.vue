<template>
<div>
    <div
        id="CoverImg"
        :style="{
            background: coverImg
        }"
    >
    </div>
        <h1 id="CoverImgTitle">{{title}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            coverImg: `url(${require("@/assets/CoverImg.png")})`,
            title: 'My Github Repos'
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
#CoverImgTitle {
    font-size: 5em;
    color: #000;
}

@media screen and (max-width: 900px) {
    #CoverImgTitle {
        font-size: 2.3em;
    }
}
</style>
