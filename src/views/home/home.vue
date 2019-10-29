<template>
  <div class="home">
    <Carrousel />
    <Announcement />
    <HomeList />
    <div style="height: 1000px;background:rgba(0,0,0,0.5)"></div>
  </div>
</template>

<script>
import Carrousel from '@/components/archive/carrousel'
import Announcement from '@/components/archive/announcement'
import HomeList from '@/components/archive/list'
export default {
  name: 'home',
  components: {
    Carrousel,
    Announcement,
    HomeList
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">

</style>
