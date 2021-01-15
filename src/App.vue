<template>
    <div id="app">
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
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: var(--bgcolorSecond);
}
</style>
