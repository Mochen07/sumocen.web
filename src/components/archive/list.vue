<template>
  <div class="articles">
    <div class="article-list">
      <transition name="module" mode="out-in">
        <!--
        <transition-group key="list" name="fade" tag="div" v-if="article.data.data && article.data.data.length">
          <list-item
            :key="articleItem.id"
            :article="articleItem"
            @click.native="toDetail(articleItem)"
            v-for="articleItem in article.data.data"
          />
        </transition-group>
        -->
        <transition-group key="list" name="fade" tag="div">
          <list-item key="key" />
        </transition-group>
      </transition>
    </div>
  </div>
</template>

<script>
import listItem from '@/components/archive/item'
export default {
  name: 'articles',
  components: {
    listItem
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.articles{}
</style>
