<template>
  <div class="empty-box">
    <slot>{{$i18n.text.empty}}</slot>
  </div>
</template>

<script>
export default {
  name: 'empty-box'
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.empty-box{
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 5em;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
