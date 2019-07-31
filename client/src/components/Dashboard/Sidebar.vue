<template lang="pug">
.sidebar
    .logo TEST
    .user
        .user-avatar
        .username {{ username }}
    .menu
        .menu-element.active Главная
        .menu-element(@click="signout()") Выход
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Sidebar',
    methods: {
        ...mapActions(['logout']),
        signout() {
            this.logout()
            this.$router.push('/')
        }
    },
    computed: {
        username() {
            return this.$store.getters.getUsername
        }
    }
}
</script>

<style lang="sass" scoped>
.sidebar 
    position: fixed
    display: grid
    grid-gap: 3em
    align-content: start
    top: 0
    left: 0
    background-color: white
    width: 280px
    height: 100vh
    box-shadow: 0 0 15px rgba(0,0,0,0.05)
    padding-top: 50px

.logo
    cursor: pointer
    font-size: 1.5em
    
.user
    display: grid
    grid-gap: 1.5em
    justify-items: center

.user-avatar
    background-image: url(https://images.squarespace-cdn.com/content/57a9dcfd46c3c496d8299f87/1506564797724-B1TJAHGA3QS5WCV263L8/Bob-Marley-MOJO-cover-image.jpg?content-type=image%2Fjpeg)
    background-position: center
    background-size: cover
    width: 75px
    height: 75px
    box-shadow: 0 8px 15px rgba(0,0,0,0.2)
    border-radius: 50%

.username
    font-weight: 700
    
.menu
    display: grid
    grid-gap: 1em
    align-content: start
    justify-content: center

.menu-element
    cursor: pointer
    display: grid
    align-content: center
    color: black
    width: 220px
    height: 50px
    border-radius: 8px
    transition: all 150ms ease-in-out
    font-size: 0.9em
    &:hover
        background-color: #FAFAFA


.active
    color: white
    box-shadow: 0 4px 15px rgba(0,0,0,0.1)
    background-color: #00BCD4
    &:hover
        background-color: darken(#00BCD4, 10%)


</style>
