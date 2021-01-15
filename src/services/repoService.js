import api from '@/services/api.js'

export default {
    async getRepos() {
        const res = await api().get('',{})
        return res
    }

}