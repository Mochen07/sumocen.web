<template>
  <div class="home">
    <Carrousel />
    <Announcement />
    <div style="height: 1000px;background:rgba(0,0,0,0.5)"></div>
  </div>
</template>

<script>
import Carrousel from '@/components/archive/carrousel'
import Announcement from '@/components/archive/announcement'
export default {
  name: 'home',
  components: {
    Carrousel,
    Announcement
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">

</style>
