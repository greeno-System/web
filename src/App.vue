<template>
    <div class="app--wrap" id="app">
        <div class="page--wrap">
            <Navigation />
            <router-view />
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue'

    export default {
        name: 'home',
        components: {
            Navigation
        }
    }
</script>

<style lang="less">
    @import "assets/styles/all";
</style>
