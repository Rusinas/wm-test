<template lang="pug">
.wrapper
    h3 У вас нет доступа к данной странице.
    router-link(to="/") На главную
</template>

<style lang="sass" scoped>
.wrapper
    display: grid
    height: 100vh
    width: 100vw
    align-content: center
    justyfy-items: center
</style>
