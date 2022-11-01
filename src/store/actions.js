import api from '@/api'
import router from '@/router'

import {
    SET_ACCESS_TOKEN
} from './mutations-types'

export default {
    login({ commit }, payload) {
        const { id, password } = payload
        return api.post('/cs/login', { id, password })
            .then(res => {
                const accessToken = res.data.body
                if (accessToken) {
                    commit(SET_ACCESS_TOKEN, accessToken)
                    router.push({ name: 'adminmain' })
                } else {
                    router.push({ name: 'login' })
                        .catch(err => {
                            if (err.name != 'NavigationDuplicated') {
                                throw err;
                            }
                        })
                }
            })
    },
    adminList({ commit }, payload) {
        const { page, count } = payload
        return api.get('/admin_list', {
            params: { page, count }
        })
            .then(res => {
                commit(ADMIN_LIST, res.data.body)
                return res
            })
            .catch(err => {
                if (err.response.status === 401) {
                    alert('로그인 후 이용해주세요.')
                    router.push({ name: 'login' })
                }
            })
    },
}