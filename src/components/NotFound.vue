<template>
    <div class="not-found--message">
        S0rry, P4ag3 n0t f0und
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
    }
</script>

<style lang="less" scoped>
    @body--background-color: #E5E5E5;
    @navigation--background-color: #FFFFFF;
    @accent-color: #6FCF97;

    .not-found--message {
        color: @accent-color;
        font-size: 25px;
        font-weight: bolder; 
    }
</style>