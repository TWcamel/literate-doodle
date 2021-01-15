<template>
    <div id="main-page">
        <router-view></router-view>
    </div>
</template>

<style scoped>
#main-page {
    /* margin-left: var(--sideNavViewWidth); */
}

@media screen and (max-width: 900px) {
    #main-page {
        margin-left: 0;
    }
}
</style>
