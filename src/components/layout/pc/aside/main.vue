<template>
  <aside id="aside" class="aside">
    Aside-View
    <div style="height: 1000px;background:rgba(255,192,203,0.5)"></div>
  </aside>
</template>

<script>
export default {
  name: 'aside-view'
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  $aside-width: 19em;

  #aside {
    float: right;
    display: block;
    width: $aside-width;
    margin: 0;
  }
</style>
