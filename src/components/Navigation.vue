<template>
    <div class="navigation--wrapper" id="navigation">
        <div class="navigation--container">
            <div class="navigation--head">
            </div>
            <div class="navigation--body">
                <div class="navigation--entry" v-for="(route, index) in routes" :key="index">
                    <router-link :to="{ name: route.routeName }">
                        <div class="navigation--entry-content" >
                            <div class="navigation--icon">
                                <img :src="route.routeIcon" class="icon" />
                            </div>
                            <div class="navigation--name">
                                {{ route.routeDisplay }}
                            </div>
                        </div>
                        <div class="navigation--entry-seperator"></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routes: [
                    {
                        routeDisplay: 'Dashboard',
                        routeName: 'dashboard',
                        routeIcon: require('../assets/img/icons/dashboard.svg')
                    }, {
                        routeDisplay: 'Setup',
                        routeName: 'setup',
                        routeIcon: require('../assets/img/icons/setup.svg')
                    }, {
                        routeDisplay: 'Komponenten',
                        routeName: 'components',
                        routeIcon: require('../assets/img/icons/fan.svg')
                    }, {
                        routeDisplay: 'System',
                        routeName: 'system',
                        routeIcon: require('../assets/img/icons/gear.svg')
                    },
                ]
            }
        },
        name: 'Navigation',
    }
</script>

<style lang="less">
    @import "../assets/styles/all.less";
</style>