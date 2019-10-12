<template>
  <div id="app">
    <!--布局-->
    <DefaultLayouts />
  </div>
</template>

<script>
import DefaultLayouts from '@/layouts/default'

export default {
  name: 'App',
  components: {
      DefaultLayouts
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
