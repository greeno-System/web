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
                                <i class="icon {{ route.routeIcon }}"></i>
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
                        routeIcon: 'icon-home'
                    }, {
                        routeDisplay: 'Setup',
                        routeName: 'setup',
                        routeIcon: 'icon-home'
                    }, {
                        routeDisplay: 'Komponenten',
                        routeName: 'components',
                        routeIcon: 'icon-home'
                    }, {
                        routeDisplay: 'Status',
                        routeName: 'state',
                        routeIcon: 'icon-home'
                    },
                ]
            }
        },
        name: 'Navigation',
    }
</script>

<style lang="less">
@body--background-color: #E5E5E5;
@navigation--background-color: #FFFFFF;
@accent-color: #6FCF97;
    .navigation--wrapper {
        display: inline-table;
        background: transparent;
        padding: 30px;

        width: 350px;
        height: 100%;
    }

    .navigation--container {
        background-color: @navigation--background-color;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.1);

        height: 100%;

        .navigation--head {
            background-color: @accent-color;
            color: #FFFFFF;
            text-align: center;
            background-image: url(~@/assets/img/lol.png);
            background-position: center;
            background-size: 150%;
            background-repeat: no-repeat;

            height: 160px;
            font-weight: 400;
            font-size: 37px;
            letter-spacing: 6px;
        }
    }

    .navigation--entry {
        position: relative;
        width: 100%;
        background-color: transparent;
        transition: background-color 0.2s;
        cursor: pointer;

        .navigation--icon {
            height: 80px;
            width: 80px;
            display: inline-block;
            transition: color 0.2s;
            color: #4B4B4B;

            .icon {
                font-size: 50px;
                display: inline-block;
                padding-top: 10px;
            }
        }

        .navigation--name {
            width: calc(100% - 84px);
            padding-top: 25px;
            padding-bottom: 25px;
            color: #4B4B4B;
            transition: color 0.2s;
            font-size: 29px;
            display: inline-block;
            vertical-align: top;
            font-weight: 100;
        }

        .navigation--entry-seperator {
            margin-left: 20px;
            margin-right: 20px;
            background-color: @accent-color;
            height: 1px;
        }

        &:hover {
            background-color: #f0f0f0;
        }

        .router-link-exact-active {
            .navigation--name, .navigation--icon {
                color: darken(@accent-color, 20%);
            }
        }
    }
</style>