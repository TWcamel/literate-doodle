<template>
    <div id="Profolio">
        <parallax-container />
        <div id="StrokeContainer">
            <img id="Avatar" :src="avatar" />
            <h1 id="Stroke">{{ title }}</h1>
        </div>
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
import config from "../config.js"

export default {
    data() {
        return {
            repos: [],
            title: "Responsive Sidenav Example",
            avatar: `https://avatars1.githubusercontent.com/u/37062662?s=460&u=f18540c67e83ea46bcdaa1c72b75c17aff1d80ce&v=4)`
        }
    },
    components: { ParallaxContainer, CoverImg },
    methods: {
        async updateRepos() {
            try {
                const repos = await repoService.getRepos()
                this.repos = repos.data
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
        }
    },
    async created() {
        await this.updateRepos()
        this.title = config.USER_NAME.toUpperCase()
    }
}
</script>

<style scoped>
#Profolio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#Repo {
    width: 500px;
    background-color: #fff;
    padding: 10px 255px;
    margin-top: 20px;
    border-radius: 6px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-direction: column;
    /* user-select: none; */
    box-shadow: rgba(102, 96, 96, 0.52) 0px 0px 12px 0px;
    font: 1.8em "Titillium Web", sans-serif;
    letter-spacing: 0.2px;
    outline: none;
    word-break: break-all;
}

#Description {
    font: normal 1em sans-serif;
    background-color: #fff;
    box-shadow: #5e5858b7 0px 0px 12px 0px;
    color: #000;
    padding: 10px;
    border-radius: 6px;
}

#Url {
    text-decoration: none;
    color: grey;
}

#Stroke {
    border: cornsilk;
    border-style: outset;
    padding: 0.3em;
    width: 9em;
    font-size: 3em;
    -webkit-text-stroke: 3px rgb(243, 228, 160);
    -webkit-text-fill-color: white;
    -webkit-animation: fill 0.8s infinite alternate;
    border-radius: 8px;
}

@-webkit-keyframes fill {
    from {
        -webkit-text-fill-color: rgb(74, 155, 221);
    }
    to {
        -webkit-text-fill-color: rgb(61, 75, 88);
    }
}

#StrokeContainer {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100vw;
    background-color: var(--bgcolorFist);
}

#Avatar {
    width: 8em;
    padding-right: 2em;
}
</style>
