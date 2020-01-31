<template>
    <div class="dashboard--card">
        <div class="card--headline">
            <a class="headline">{{ cardHeadline }}</a>
            <a v-on:click="refreshInformation()" class="information--refresh">&#128260;</a>
        </div>
        <div class="card--content">
            <div class="information--column" v-for="(information, index) in cardInformation" :key="index">
                <b>{{ information.label }}: </b>{{ information.value }}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

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
        },
        methods: {
            refreshInformation() {
                axios.get('http://localhost:8000/' + this.cardEndpoint)
                    .then((res) => {
                        this.cardInformation = res.data.data;
                    });
            },
        },
        created() {
            this.refreshInformation();
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
            }
        }

        .card--content {
            padding-top: 10px;
        }
    }
</style>