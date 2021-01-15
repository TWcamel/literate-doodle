<template>
    <div id="main-page">
        <router-view></router-view>
    </div>
</template>

<style scoped>

@media screen and (max-width: 900px) {
    #main-page {
        width: var(--RWDViewWidth);
        margin-left: 0;
    }
}
</style>
