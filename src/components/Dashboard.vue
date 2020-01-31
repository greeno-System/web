<template>
    <div>
        <DashboardCard v-for="(dashboardCard, index) in dashboardCards" :key="index"
            :cardHeadline="dashboardCard.headline" :cardEndpoint="dashboardCard.endpoint" />
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
            this.getDashboardCards();
        },
        components: {
            DashboardCard
        },
        name: 'Dashboard',
    }
</script>

<style lang="less" scoped>
</style>