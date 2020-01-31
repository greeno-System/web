<template>
    <div class="dashboard--card">
        <!-- Headline -->
        <div class="card--headline">
            <a class="headline">{{ cardHeadline }}</a>
            <a v-on:click="refreshInformation()" class="information--refresh">&#128260;</a>
        </div>
        <!-- Basic -->
        <div class="card--content" v-if="cardType == 'basic'">
            <div class="information--column" v-for="(information, index) in cardInformation" :key="index">
                <b>{{ information.label }}: </b>{{ information.value }}
            </div>
        </div>
        <!-- Graph -->
        <div class="card--content" v-if="cardType == 'graph'">
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
                cardInformation: ''
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
                axios.get('http://localhost:8000/' + this.cardEndpoint)
                    .then((res) => {
                        this.cardInformation = res.data.data;
                    });
                if (this.cardType == 'graph') {
                    this.$refs.graph.renderGraph()
                }
            },
        },
        created() {
            this.refreshInformation();
        },
        components: {
            PieGraph
        },
        name: 'DashboardCard',
    }
</script>

<style lang="less" scoped>
    @body--background-color: #E5E5E5;
    @navigation--background-color: #FFFFFF;
    @accent-color: #6FCF97;

    .dashboard--card {
        display: inline-block;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        position: relative;
        margin: 0 20px 20px 0;
        vertical-align: middle;
        box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.1);
        transition: 0.4s transform, 0.4s box-shadow;

        .card--headline {
            padding-bottom: 10px;
            border-bottom: 1px solid @body--background-color;

            a {
                font-weight: bolder;
                font-size: 28px;
            }

            .headline {
                margin-right: 33px;
            }

            .information--refresh {
                cursor: pointer;
                position: absolute;
                right: 20px;
                transition: 0.1s transform;
                user-select: none;

                &:active {
                    transform: scale(0.95);
                }
            }
        }

        .card--content {
            padding-top: 10px;
        }

        &:hover {
            transform: scale(1.005);
            box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.1)
        }
    }
</style>