<template>
    <div>
        <DashboardCard v-for="(dashboardCard, index) in dashboardCards" :key="index"
            :cardHeadline="dashboardCard.headline" :cardEndpoint="dashboardCard.endpoint" :cardType="dashboardCard.type"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import DashboardCard from '@/components/DashboardCard.vue'

    export default {
        data() {
            return {
                dashboardCards: '',
                path: 'http://localhost:8000/core/dashboard',
            };
        },
        methods: {
            getDashboardCards() {
                axios.get(this.path)
                    .then((res) => {
                        this.dashboardCards = res.data.data;
                    });
            }
        },
        created() {
            // this.getDashboardCards();
            this.dashboardCards = [
               {
                   'headline': 'Testgraph',
                   'endpoint': 'roflcopter',
                   'type': 'graph'
               } 
            ]
        },
        components: {
            DashboardCard
        },
        name: 'Dashboard',
    }
</script>

<style lang="less" scoped>
</style>