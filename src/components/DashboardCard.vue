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
            position: relative;
            min-width: 230px;
            min-height: 260px;

            .card--loading, .card--error {
                position: absolute;
                height: 100%;
                width: 100%;
                background: rgba(255, 255, 255, 0.7);

                &:before {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    text-align: center;
                    content: '\1F6AB';
                    font-size: 27px;
                }
            }

            .card--loading {
                &:before {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    text-align: center;
                    content: '\23F3';
                    font-size: 27px;

                    animation:pulse 1s ease-in-out infinite alternate;
                }
            }

            .card--error {
                cursor: pointer;

                a {
                    width: 100%;
                    text-align: center;
                    top: 60%;
                    color: rgb(255, 0, 0);
                    font-weight: bold;
                    position: absolute;
                }
            }
        }

        @keyframes pulse { 0% {opacity: 0;}100% { opacity: 1; } }

        &:hover {
            transform: scale(1.005);
            box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.1)
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity .5s
        }

        .fade-enter,
        .fade-leave-to {
            opacity: 0
        }
    }
</style>