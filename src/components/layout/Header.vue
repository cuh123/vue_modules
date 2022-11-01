<template>
    <header class="layout_header">
        <router-link to="/admin"><h1 class="logo" @click="reset">Vue Moduels</h1></router-link>
        <section class="hd_info">
            <div class="btn btn_small" @click="onClickLogout">로그아웃</div>
            <div class="login_info" @click="adminSet" v-if='loginStatus.auth === "AD"'>{{ loginStatus.name }}님(관리자)</div>
        </section>
        <div style="height:30px;background:#eee"></div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapState(['loginStatus'])
    },
    methods: {
        adminSet: function() {
            this.$router.push({ name: 'adminsetting' })
                .catch(err => {
                    if (err.name != 'NavigationDuplicated') {
                        throw err;
                    }
                })
        },
        onClickLogout: function() {
            this.logout()
            this.$router.push({ name: 'login' })
        },
        reset: function() {
            localStorage.clear()
        },
        ...mapActions(['logout'])
    }
}
</script>