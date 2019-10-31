<template>
  <div class="articles">
    <div class="article-list">
      <transition name="module" mode="out-in">
        <transition-group key="list" name="fade" tag="div">
          <list-item v-for="item in 17" :key="item" />
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
.articles {

    > .article-list-header {
      margin-bottom: 1em;
      position: relative;
      overflow: hidden;
      @include module-blur-bg();
    }

    > .article-list {
      margin-bottom: 1em;
      min-height: 1em;
      overflow: hidden;

      > .article-empty-box {
        @include module-blur-bg();
      }

      > .article-loading {
        display: flex;
        height: 10em;
        @include module-blur-bg();
      }

      > .article-errmsg {
        height: 10em;
        line-height: 10em;
        text-align: center;
        color: rgba(0, 0, 0, 0.38);
        @include module-blur-bg();
      }
    }

    > .article-load {
      position: relative;
      overflow: hidden;
      z-index: 0;

      > .btn-loadmore {
        width: 100%;
        height: 3em;
        padding: 0 2rem;
        line-height: 3em;
        color: $reversal;
        background-color: $module-bg;
        display: flex;
        justify-content: space-between;

        &:hover {
          background-color: $module-hover-bg;
        }

        &[disabled] {
          opacity: .9;
          background-color: $module-bg-opacity-5;
        }

        @keyframes loadmore-btn-icon-color {
          0% { color: $red }
          100% { color: $accent }
        }

        > .icon {
          > .iconfont {
            animation: loadmore-btn-icon-color 2s infinite;
          }
        }

        > .text {
          text-transform: uppercase;
          font-family: 'webfont-bolder', 'DINRegular';
        }
      }
    }
  }
</style>
