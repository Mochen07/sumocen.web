<template>
  <aside id="aside" class="aside">
    <div class="aside-search">
      <div class="search-box">
        search-box
      </div>
    </div>
    <div class="aside-article">
      <p class="title">
        <i class="iconfont icon-hotfill"></i>
        <strong v-text="$i18n.text.article.hotlist"></strong>
      </p>
      <empty-box v-if="false">
        <slot>{{ $i18n.text.article.empty }}</slot>
      </empty-box>
      <ul class="aside-article-list">
        <li v-for="item in 7" :key="item" class="item">
          <span class="index"></span>
          <router-link to="/" class="title">
            <span v-text="'狂拽帅气吊炸天'"></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="aside-calendar">
      <calendar />
    </div>
    <div style="height: 1000px;background:rgba(255,192,203,0.5)"></div>
  </aside>
</template>

<script>
import Calendar from './calendar'
export default {
  name: 'aside-view',
  components: {
    Calendar
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  $aside-width: 19em;

  #aside {
    float: right;
    display: block;
    width: $aside-width;
    margin: 0;

    .aside-search,
    .aside-article,
    .aside-calendar,
    .aside-mammon,
    .aside-tag {
      @include module-blur-bg();
    }

    >.aside-article {
      overflow: hidden;
      margin-bottom: 1em;

      >.title {
        height: 3em;
        line-height: 3em;
        margin: 0;
        padding: 0 0.8em;
        border-bottom: 1px dashed $body-bg;
        text-transform: uppercase;

        .iconfont {
          margin-right: 0.5em;
        }
      }

      > .aside-article-list {
        list-style: none;
        padding: .5em 0;
        margin-bottom: 0;
        counter-reset: hot-article-list;

        .item {
          display: block;
          height: 1.9em;
          line-height: 1.9em;
          padding: 0 .8em;
          margin-bottom: .5em;
          color: $text-dark;
          @include text-overflow();

          &:nth-child(1) {
            .index {
              color: $reversal;
              background-color: $primary-opacity-5;
            }
          }

          &:nth-child(2) {
            .index {
              color: $reversal;
              background-color: rgba($accent, .6);
            }
          }

          &:nth-child(3) {
            .index {
              color: $reversal;
              background-color: rgba($red, .6);
            }
          }

          &:last-child {
            margin: 0;
          }

          .index {
            color: $secondary;
            counter-increment: hot-article-list;
            background-color: $module-hover-bg;
            width: 1.5em;
            height: 1.5em;
            line-height: 1.5em;
            display: inline-block;
            text-align: center;
            margin-right: .5em;
            font-size: .8em;

            &::before {
              content: counter(hot-article-list);
            }
          }

          .title {
            font-size: .9em;

            &:hover {
              margin-left: .5em;
              text-decoration: underline;
            }
          }
        }
      }
    }

    .aside-calendar {
      padding: .8em;
      margin-bottom: 1em;
    }
  }
</style>
