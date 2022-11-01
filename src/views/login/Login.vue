<template>
    <login-form @submit="onSubmit"/>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    components: { LoginForm },
    methods: {
        onSubmit(payload) {
            this.login(payload)
        },
        ...mapActions(['login'])
    }
}
</script>