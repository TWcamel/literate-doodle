<template>
    <div id="Profolio">
        <parallax-container />
        <landing-title />
        <about-me />
        <cover-img />

        <div id="Repo" v-for="(repo, idx) in repos" :key="idx">
            📚 {{ repo.name }} {{ repo.stargazers_count }}
            <p id="Description">
                {{ repo.description }}
            </p>
            <a id="Url" :href="repo.html_url">🔗 {{ repo.html_url }}</a>
            <p id="UpdateTime">
                🕘 {{ repo.updated_at.replace(/T/i, " ⬆ ").split("Z")[0] }}
            </p>
        </div>
    </div>
</template>

<script>
import ParallaxContainer from "../components/ParallaxContainer"
import CoverImg from "../components/CoverImg"
import repoService from "../services/repoService"
import LandingTitle from "../components/LandingTitle.vue"
import AboutMe from "../components/AboutMe.vue"
import config from "../config.js"

export default {
    data() {
        return {
            repos: []
        }
    },
    components: { ParallaxContainer, CoverImg, LandingTitle, AboutMe },
    methods: {
        async updateRepos() {
            try {
                const repos = await repoService.getRepos()
                this.repos = repos.data
                this.repos = await this.sortArr(this.repos)
                this.repos.forEach(ele => {
                    ele.stargazers_count =
                        ele.stargazers_count > 0
                            ? `🌟 ${ele.stargazers_count}`
                            : `✴ ${ele.stargazers_count}`
                })
                // console.log(this.repos)
            } catch (e) {
                console.error(e)
            }
        },
        async sortArr(ele) {
            return ele
                .sort((a, b) => a.stargazers_count - b.stargazers_count)
                .reverse()
        }
    },
    async created() {
        await this.updateRepos()
    }
}
</script>

<style scoped>
#Profolio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--bgcolorSecond);
}

#Repo {
    width: 50vw;
    background-color: #fff;
    padding: 10px 10vw;
    margin-top: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
    user-select: none;
    box-shadow: rgba(102, 96, 96, 0.52) 0px 0px 12px 0px;
    font: 1.8em "Titillium Web", sans-serif;
    letter-spacing: 0.2px;
    outline: none;
    word-break: break-all;
}

#Repo >>> #Description {
    font: normal 1em sans-serif;
    background-color: #fff;
    box-shadow: #5e5858b7 0px 0px 12px 0px;
    color: #000;
    padding: 10px;
    border-radius: 6px;
}

#Repo >>> #Url {
    text-decoration: none;
    color: grey;
}
</style>
