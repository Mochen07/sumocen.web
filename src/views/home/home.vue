<template>
  <div class="home">
    <Carrousel />
    <div style="height: 1000px;background:rgba(0,0,0,0.5)"></div>
  </div>
</template>

<script>
import Carrousel from '@/components/archive/carrousel'
export default {
  name: 'home',
  components: {
    Carrousel
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">

</style>
