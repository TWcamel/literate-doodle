<template>
    <div id="ParallaxContainer">
        <div
            class="Parallax-item"
            v-for="(item, idx) in parallax"
            :key="idx"
            :style="{ background: item }"
        />
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
                `url(${require("@/assets/parallax-5.png")})`
            ]
        }
    },
    mounted() {
        this.stopListenOutOfDom()
    },
    destroy() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll(event) {
            const parent = document.querySelector("#ParallaxContainer")
            parent.style.setProperty("--y", `${window.scrollY}px`)

            // below code wouldn't worked, i hava no idea how could this happened
            // if you have any idea, please note me: Nthu_iem@pm.me
            // i use .class:nth-child in css instead

            // let children = parent.getElementsByTagName("div")
            // for (let i = 0; i < children.length; ++i) {
            //     children[i].style.setProperty(
            //         "transform",
            //         `translateY(calc(var(--y)) * ${ -0.2 }px `,
            //         "important"
            //     )
            // }
        },

        stopListenOutOfDom() {
            const referenceImg = document.querySelector(
                ".Parallax-item:last-child"
            )

            const observer = new IntersectionObserver(entries => {
                const [{ isIntersecting }] = entries

                if (isIntersecting)
                    window.addEventListener("scroll", this.handleScroll, {
                        capture: false,
                        passive: true
                    })
                else window.removeEventListener("scroll", this.handleScroll)
            })

            observer.observe(referenceImg)
        }
    }
}
</script>

<style scoped>
#ParallaxContainer {
    width: 100vw;
    height: 900px;
    --y: 0px;
    background-color: var(--bgcolorFist);
}

#ParallaxContainer div {
    background-position: center !important;
    background-size: cover !important;
    height: 900px;
    width: 100%;
}

.Parallax-item:nth-child(1) {
    transform: translateY(calc(var(--y) * -0.67));
    z-index: 1;
}

.Parallax-item:nth-child(2) {
    transform: translateY(calc(var(--y) * -0.6));
    z-index: 2;
}

.Parallax-item:nth-child(3) {
    transform: translateY(calc(var(--y) * -0.53));
    z-index: 3;
}

.Parallax-item:nth-child(4) {
    transform: translateY(calc(var(--y) * -0.46));
    z-index: 4;
}

.Parallax-item:nth-child(5) {
    transform: translateY(calc(var(--y) * -0.39));
    z-index: 5;
}

.Parallax-item {
    position: absolute;
    will-change: transform;
}
</style>
