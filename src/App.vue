<template>
    <div id="app">
        <router-view name="nav" />
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {}
}
</script>

<style>
:root {
    --bgcolorFist: #255ba0;
    --bgcolorSecond: #dddbd7;
    --mainPageViewWidth: 100vw;
    --rwdTitleSize: 2.3em;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: var(--bgcolorSecond);
    width: var(--mainPageViewWidth);
    margin: 0;
    padding-bottom: 3em;
    margin: 0px -10px;
}

/* @media screen and (max-width: 900px) {
    #app {
        width: var(--mainPageViewWidth);
    } */
/* } */
</style>
