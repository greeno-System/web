<template>
    <div class="content--wrapper">
        <div class="content--header" id="content-header">
            <span class="header--headline">{{ $route.meta.title }}</span>
            <span v-bind:class="{'header--subline': $route.meta.subtitle}">{{ $route.meta.subtitle }}</span>
        </div>
        <div class="content--container">
            <component :is="$route.meta.component" />
        </div>
    </div>
</template>

<script>
    import Dashboard from '@/components/Dashboard.vue'
    import NotFound from '@/components/NotFound.vue'

    export default {
        name: 'PageView',
        components: {
            Dashboard,
            NotFound
        }
    }
</script>

<style lang="less">
    @import "../assets/styles/all";
</style>