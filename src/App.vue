<template>
  <DesignSystem></DesignSystem>
</template>

<script>
import DesignSystem from './components/DesignSystem'

export default {
  name: 'App',
  components: {
    DesignSystem,
  },
}
</script>

<style lang="scss">
$mdi-font-path: '~@mdi/font/fonts' !default;
@import '~@mdi/font/scss/materialdesignicons.scss';

@import 'assets/scss/normalize';
@import 'assets/scss/libs/fonts';
@import 'assets/scss/libs';

@import 'assets/scss/design-system';
</style>
