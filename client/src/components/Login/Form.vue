<template lang="pug">
.login
    template(v-if="correctToken")
        h3 Здравствуйте, {{ username }}!
        p Введите пароль для продолжения
        input(type="password" placeholder="Пароль" v-model="password" @keyup.enter="password ? signin() : null")
        transition(name="fade")
            .login-error(v-if="loginError.show") {{ loginError.message }}
        button(@click.prevent="signin()" :class="!password ? 'disabled' : ''") Войти
    template(v-else)
        h3 Доступ запрещен
        p Токен не совпадает
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginForm',
    data() {
        return {
            correctToken: false,
            username: this.$route.params.username || 'Анонимус',
            password: '',
            loginError: {
                show: false,
                status: null,
                message: null
            }
        }
    },
    watch: {
        password() {
            if (this.loginError.show) this.toggleLoginError()
        }
    },
    mounted() {
        this.checkToken()
    },
    methods: {
        ...mapActions(['login']),
        async signin() {
            const { username, password } = this
            const user = {
                username,
                password
            }

            this.password = null

            try {
                await this.login(user)
                this.$router.push('/dashboard')
            } catch (error) {
                this.toggleLoginError(error.response && error.response.status ? error.response.status : null)
            }
        },
        checkToken() {
            if (this.$route.query.token === process.env.VUE_APP_TOKEN) this.correctToken = true
        },
        toggleLoginError(status) {
            this.loginError.show = !this.loginError.show
            if (status) this.loginError.status = status
                if (status === 403) this.loginError.message = 'Неверный логин или пароль'
            else this.loginError.message = 'Произошла ошибка. Попробуйте позже.'
        }
    }
}
</script>

<style lang="sass" scoped>
.login
    display: grid
    grid-gap: 1em
    align-content: start
    width: 350px
    background-color: white
    border-radius: 10px
    box-shadow: 0 3px 20px rgba(0,0,0,0.1)
    box-sizing: border-box
    padding: 35px 50px
    transition: all 1s linear

h3 
    margin: 0
    width: 100%

p
    font-size: 0.8em
    color: #BDBDBD
    margin: 0

input
    border: 1px solid #dadada
    width: 100%
    height: 3em
    border-radius: 4px
    box-sizing: border-box
    padding: 0.5em 0.8em
    font-size: 0.8em
    &:focus
        outline: none
        &::placeholder
            color: transparent
    &::placeholder
        color: #dadada
        transition: all 100ms ease-in

button
    cursor: pointer
    border: none
    height: 3em
    border-radius: 4px
    color: white
    background-color: #00BCD4
    transition: all 150ms ease-in-out
    &:hover
        background-color: darken(#00BCD4, 10%)
    &:focus
        outline: none
    &:active
        background-color: darken(#00BCD4, 15%)

.disabled
    pointer-events: none
    background-color: #E0E0E0
    color: #757575

.login-error 
    background-color: #ef5350
    color: white
    font-size: 0.8em
    box-sizing: border-box
    padding: 1.5em
    border-radius: 4px
    transition: all 300ms ease-in-out

.fade-enter-active
    transition: opacity 500ms linear, transform 350ms ease-out

.fade-leave-active 
    transition: all 300ms ease-in

.fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(100%)

</style>
