<template>
  <div id="app-main" class="main-pc">
    <header-view />
    <background />
  </div>
</template>

<script>
import HeaderView from './header'
import Background from '@/components/widget/background'
export default {
  name: 'MainPc',
  components: {
    HeaderView,
    Background
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">

</style>
