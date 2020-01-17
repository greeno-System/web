<template>
    <div class="app--wrap" id="app">
        <div class="page--wrap">
            <Navigation />
            <router-view />
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation.vue'

    export default {
        name: 'home',
        components: {
            Navigation
        }
    }
</script>

<style lang="less">
@body--background-color: #E5E5E5;
@navigation--background-color: #FFFFFF;
@accent-color: #6FCF97;
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: @body--background-color;
    }

    html, body, .app--wrap {
        height: 100%;
    }

    .page--wrap {
        width: 100%;
        height: 100%;
        background: transparent;
    }

    a {
        &:link {
            &:active {
                color: inherit;
            }
        }
    }

    @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-display: swap;
    src: url(~@/assets/fonts/Roboto/Roboto-Light.ttf);
}

@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-display: swap;
    src: url(~@/assets/fonts/Roboto/Roboto-Regular.ttf);
}

@font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-display: swap;
    src: url(~@/assets/fonts/Roboto/Roboto-Medium.ttf);
}

@font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-display: swap;
    src: url(~@/assets/fonts/Roboto/Roboto-Bold.ttf);
}

@font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-display: swap;
    src: url(~@/assets/fonts/Roboto/Roboto-Black.ttf);
}

@font-face {
    font-family: 'greenoicons';
    src: url(~@/assets/fonts/GreenoIcons/greenoicons.eot?10680233);
    src: url(~@/assets/fonts/GreenoIcons/greenoicons.eot?10680233#iefix) format('embedded-opentype'),
         url(~@/assets/fonts/GreenoIcons/greenoicons.woff2?10680233) format('woff2'),
         url(~@/assets/fonts/GreenoIcons/greenoicons.woff?10680233) format('woff'),
         url(~@/assets/fonts/GreenoIcons/greenoicons.ttf?10680233) format('truetype'),
         url(~@/assets/fonts/GreenoIcons/greenoicons.svg?10680233#greenoicons) format('svg');
    font-weight: normal;
    font-style: normal;
  }
   
   [class^="icon-"]:before, [class*=" icon-"]:before {
    font-family: "greenoicons";
    font-style: normal;
    font-weight: normal;
    speak: none;
   
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    /* opacity: .8; */
   
    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;
   
    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;
   
    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: .2em;
   
    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */
   
    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }
   
  .icon-bug:before { content: '\e800'; } /* '' */
  .icon-home:before { content: '\e801'; } /* '' */
  .icon-chat:before { content: '\e802'; } /* '' */
  .icon-settings:before { content: '\e803'; } /* '' */
  .icon-settings-greeno:before { content: '\e804'; } /* '' */
</style>
