<template>
    <div class="dashboard--card">

        <!-- Headline -->
        <div class="card--headline">
            <a class="headline">{{ cardHeadline }}</a>
            <a v-on:click="refreshInformation()" class="information--refresh">&#128260;</a>
        </div>

        <!-- Basic -->
        <div class="card--content" v-if="cardType == 'basic'">
            <transition name="fade">
                <div class="card--loading" v-if="loading"></div>
                <div class="card--error" v-else-if="error" v-on:click="close">
                    <a>{{ errorMessage }}</a>
                </div>
            </transition>
            <div class="information--column" v-for="(information, index) in cardInformation" :key="index">
                <b>{{ information.label }}: </b>{{ information.value }}
            </div>
        </div>

        <!-- Graph -->
        <div class="card--content" v-if="cardType == 'graph'">
            <transition name="fade">
                <div class="card--loading" v-if="loading"></div>
                <div class="card--error" v-else-if="error" v-on:click="close">
                    <a>{{ errorMessage }}</a>
                </div>
            </transition>
            <PieGraph ref="graph"></PieGraph>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import PieGraph from '@/components/graphs/PieGraph.vue'

    export default {
        data() {
            return {
                cardInformation: '',
                loading: true,
                error: false,
                errorMessage: ''
            }
        },
        props: {
            cardHeadline: {
                type: String,
                default: ''
            },
            cardEndpoint: {
                type: String,
                default: ''
            },
            cardType: {
                type: String,
                default: 'basic'
            },
        },
        methods: {
            refreshInformation() {
                this.loading = true;
                this.error   = false;

                // Fetch new informations
                axios.get('http://localhost:8000/' + this.cardEndpoint)
                    .then((res) => {
                        this.cardInformation = res.data.data;
                        this.loading         = false;
                    }).catch((error) => {
                        this.loading      = false;
                        this.error        = true;
                        this.errorMessage = error;
                    });

                if (this.cardType == 'graph') {
                    this.$refs.graph.renderGraph()
                }

            },
            close() {
                this.error = false;
            }
        },
        mounted() {
            this.refreshInformation();
        },
        components: {
            PieGraph
        },
        name: 'DashboardCard',
    }
</script>

<style lang="less" scoped>
    @import "../assets/styles/all.less";
</style>