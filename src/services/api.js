import axios from 'axios'
import config from '../config.js'

export default () => {
    return axios.create({
        baseURL: `https://api.github.com/users/${config.USER_NAME}/repos`,
        headers: {'Authorization': ` token ${config.API_TOKEN}`}
    })
}