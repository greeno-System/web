module.exports = {
    css: {
        loaderOptions: {
            less: {
                prependData: '@import "~@/styles/variables.less";',
                globalVars: {
                    'body--background-color': '#E5E5E5',
                    'navigation--background-color': '#FFFFFF',
                    'accent-color': '#6FCF97'
                }
            }
        }
    }
};