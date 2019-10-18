<template>
  <!--这里的class对应sass全局配置的主题-->
  <div id="layout" class="default">
    <pc-main-view />
  </div>
</template>

<script>
import PcMainView from '@/components/layout/pc/main'
export default {
  name: 'Layout',
  components: {
    PcMainView
  }
}
</script>

<style lang="scss" scoped>
  #layout {
    color: $text;
  }
</style>
