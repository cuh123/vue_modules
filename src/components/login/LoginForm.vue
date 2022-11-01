<template>
    <div class="login-content">
        <h3>로그인</h3>
        <form class="login-form" @submit.prevent="submit">
            <input type="text" v-model="id" placeholder="아이디를 입력해주세요.">
            <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요.">
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data: () => ({
        id: '',
        password: ''
    }),
    methods: {
        submit() {
            const { id, password } = this
            this.$emit('submit', { id, password })
        }
    }
}
</script>