<template>
    <div class="dashboard--card">
        <div class="card--headline">
            <a class="card--headline">Informationen</a>
        </div>
        <div class="card--content">
            <div class="information--column" v-for="(information, index) in deviceInformation" :key="index">
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
                deviceInformation: '',
                path: 'localhost:8000/core/info',
            };
        },
        methods: {
            getDeviceInformation() {
                axios.get(this.path)
                    .then((res) => {
                        this.deviceInformation = res.data;
                    });
            },
        },
        created() {
            this.getDeviceInformation();
        },
        name: 'Dashboard',
    }
</script>

<style lang="less" scoped>
    @body--background-color: #E5E5E5;
    @navigation--background-color: #FFFFFF;
    @accent-color: #6FCF97;

    .dashboard--card {
        width: 33%;
        background: #fff;
        padding: 20px;
        border-radius: 10px;

        .card--headline {
            padding-bottom: 10px;
            border-bottom: 1px solid @body--background-color;

            a {
                font-weight: bolder;
                font-size: 28px;
            }
        }

        .card--content {
            padding-top: 10px;
        }
    }
</style>