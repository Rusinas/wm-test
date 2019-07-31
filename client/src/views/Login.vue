<template lang="pug">
.wrapper
    Form
</template>

<script>
import Form from '@/components/Login/Form'
export default {
    name: 'LoginPage',
    components: {
        Form
    },
    mounted() {
    }
}
</script>

<style lang="sass" scoped>
.wrapper
    display: grid
    align-items: center
    justify-items: center
    height: 100vh
    box-sizing: border-box
</style>
