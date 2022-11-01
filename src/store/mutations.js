import {
    SET_ACCESS_TOKEN,
    ADMIN_LIST
} from './mutations-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default {
    [SET_ACCESS_TOKEN](state, accessToken) {
        if (accessToken) {
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = `${accessToken}`
            Cookies.set('accessToken', accessToken)
        }
    },
    [ADMIN_LIST](state, lists) {
        state.lists = lists
    },
}