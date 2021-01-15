<template>
    <ul id="SideNav">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#repos">Repos</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</template>

<script>
export default {}
</script>

<style scoped>
#SideNav {
    top:5em;
    list-style-type: none;
    width: var(--sideNavViewWidth);
    margin: 0;
    padding: 0;
    position: fixed;
    background-color: transparent;
    z-index: 9;
    height: 100%;
    overflow: auto;
    border-radius: 3px;
    right: 0;
    font: normal "Titillium Web", sans-serif;
    text-transform: uppercase;
}

#SideNav >>> li a {
    letter-spacing: 1.5px;
    text-rendering: optimizeLegibility;
    display: block;
    color: #000;
    padding: 1em 2em;
    text-decoration: none;
}

#SideNav >>> li a.active {
    background-color: #4c66af;
    color: white;
}

#SideNav >>> li a:hover:not(.active) {
    background-color: #555;
    color: white;
}

@media screen and (max-width: 900px) {
    #SideNav {
        width: 100vh;
        height: auto;
        position: relative;
    }

    #SideNav >>> li a {
        float: left;
        padding: 16px;
    }
}

@media screen and (max-width: 400px) {
    #SideNav >>> li a {
        text-align: center;
        float: none;
    }
}
</style>
