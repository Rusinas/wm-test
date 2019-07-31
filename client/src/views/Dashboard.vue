<template lang="pug">
.wrapper
    NoAccess(v-if="!$store.state.authorized")
    .dashboard(v-else)
        Sidebar
        .content
            Card(v-for="(card, index) in cards" :key="index" :card="card")
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar'
import Card from '@/components/Dashboard/Card'
import NoAccess from '@/components/Dashboard/NoAccess'

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Card,
        NoAccess
    },
    data() {
        return {
            cards: [
                {
                    title: 'Трафик',
                    type: 'traffic',
                    dataUnit: 'Гб'
                },
                {
                    title: 'Минуты',
                    type: 'minutes',
                    dataUnit: 'мин.'
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.dashboard
    display: grid
    grid-template-columns: 280px 1fr

.content
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
    grid-column-start: 2
    grid-gap: 3em
    padding: 5em
    box-sizing: border-box
</style>
