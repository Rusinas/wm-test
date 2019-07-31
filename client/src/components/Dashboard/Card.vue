<template lang="pug">
.card
    .header {{ card.title }}
    .data {{ cardData }}
    .description {{ card.dataUnit }}
</template>

<script>
export default {
    name: 'DashboardCard',
    props: {
        card: Object
    },
    data() {
        return {
            data: 0
        }
    },
    computed: {
        cardData() {
            return this.$store.getters.getDataForDashboardCard(this.card.type) || 0
        }
    }
}
</script>

<style lang="sass" scoped>
.card
    cursor: pointer
    display: grid
    width: 100%
    background-color: white
    box-shadow: 0 5px 15px rgba(0,0,0,0.05)
    border-radius: 10px
    box-sizing: border-box
    padding: 2em
    transition: all 200ms ease-in-out
    &:hover
        transform: translateY(-5px)
        background-color: #FAFAFA

.header
    font-weight: 600

.data
    font-size: 3em
    font-weight: 700
    margin-top: 15px

.description
    color: #BDBDBD
    margin-top: 10px
</style>
