<template>
  <div id="layout">
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
