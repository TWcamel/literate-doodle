import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import MainPage from "@/pages/MainPage.vue"
import ParallaxContainer from "@/components/ParallaxContainer.vue"

export const router = new Router({
    mode: "history",
    base: __dirname,
    routes: [
        {
            path: "/",
            name: "main-page",
            components: {
                default: MainPage,
            },
            children: [
                {
                    path: "/",
                    name: "parallax-container",
                    component: ParallaxContainer
                }
            ]
        }
    ]
})
