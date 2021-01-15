<template>
    <div>
        <parallax-container />

        <div
            style="height:1000px; margin-top:3em; background-color:red;font-size:36px"
        >
            This div is just here to enable scrolling. Tip: Try to remove the
            background-attachment property to remove the scrolling effect.
        </div>
        dddd
    </div>
</template>

<script>
import ParallaxContainer from "../components/ParallaxContainer"

export default {
    components: { ParallaxContainer }
}
</script>
