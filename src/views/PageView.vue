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
    @body--background-color: #E5E5E5;
    @navigation--background-color: #FFFFFF;
    @accent-color: #6FCF97;

    .content--wrapper {
        display: inline-table;
        padding: 30px;
        vertical-align: top;
        height: 100%;
        width: ~"calc(100% - 474px)";
        overflow-y: scroll;

        .content--header {
            color: @accent-color;
            font-weight: 700;
            padding-bottom: 5px;
            border-bottom: 2px solid darken(@body--background-color, 5%);
            
            .header--headline {
                font-size: 48px;
            }

            .header--subline {
                font-size: 24px;
                padding-left: 10px;
                margin-left: 5px;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 2px;
                    background: @accent-color;
                    top: 0;
                    left: 0;
                }
            }
        }

        .content--container {
            margin-top: 20px;
        }
    }
</style>