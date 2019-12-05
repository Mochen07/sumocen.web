<template>
  <div class="article-list-item">
    <div class="item-content">
      <div class="item-thumb">
        <router-link to="/">
          <span
            class="item-origin self"
          >
          原创
        </span>
          <img
            class="item-thumb-img"
            src="./../../assets/image/list/dream.jpg"
            alt="哈哈哈哈哈哈哈哈哈"
            title="哈哈哈哈哈哈哈哈哈"
          >
        </router-link>
      </div>
      <div class="item-body">
        <h4 class="item-title">
          <router-link to="/" title="1234567" v-text="1234567" />
        </h4>
        <p
          class="item-description"
          v-html="'<span>123123123</span>'"
        ></p>
        <div class="item-meta">
          <span class="date">
            <i class="iconfont icon-clock"></i>
            <span>{{ 1234232 | toYMD() }}</span>
          </span>
          <span class="views">
            <i class="iconfont icon-eye"></i>
            <span>0</span>
          </span>
          <span class="comments">
            <i class="iconfont icon-comment"></i>
            <span>123</span>
          </span>
          <span class="likes">
            <i class="iconfont icon-like" :class="{ liked: isLiked }"></i>
            <span>12</span>
          </span>
          <span class="categories">
            <i class="iconfont icon-list"></i>
<!--            <template v-if="article.category.length">-->
<!--              <nuxt-link-->
<!--                :key="index"-->
<!--                :to="`/category/${category.slug}`"-->
<!--                v-for="(category, index) in article.category"-->
<!--                v-text="isEnLang ? category.slug : category.name"-->
<!--              />-->
<!--            </template>-->
            <span v-text="$i18n.text.category.empty"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-list-item',
  data () {
    return {
      isLiked: false
    }
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.article-list-item{
  margin-bottom: 1em;
  @include module-blur-bg();

  &:last-child {
    margin: 0;
  }

  &:hover {
    background-color: $module-hover-bg;
  }

  > .item-content {
    display: block;
    overflow: hidden;
    height: 9.5em;
    padding: .5em;

    &:hover {

      > .item-thumb {

        .item-origin {
          opacity: 1;
        }

        .item-thumb-img {
          @include css3-prefix(opacity, .95);
          @include css3-prefix(transform, translateX(-3px));
        }
      }
    }

    > .item-thumb {
      float: left;
      width: 12em;
      height: 8.5em;
      overflow: hidden;
      position: relative;

      .item-origin {
        height: 2.1rem;
        line-height: 2.1rem;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        font-size: $font-size-small;
        text-align: center;
        color: $reversal;
        border-bottom-right-radius: 1px;
        opacity: .4;
        padding: 0 .8rem;
        text-transform: uppercase;

        &.self {
          background-color: rgba($accent, .5);
        }

        &.other {
          background-color: rgba($red, .5);
        }

        &.hybrid {
          background-color: rgba($primary, .5);
        }
      }

      .item-thumb-img {
        min-width: 100%;
        width: calc(100% + 3px);
        max-width: calc(100% + 3px);
        height: auto;
        min-height: 8.5em;
        border-color: transparent;
        background-color: $module-hover-bg;
        @include css3-prefix(opacity, 1);
        @include css3-prefix(transform, translateX(0));
      }
    }

    > .item-body {
      float: right;
      width: 28.5em;
      height: 8.5em;

      > .item-title {
        font-size: 1em;
        font-weight: bold;
        color: $link-hover-color;
        margin-top: .2em;
        margin-bottom: .5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        > a {
          margin-left: 0;

          &:hover {
            display: inline-block;
            text-decoration: underline;
            margin-left: .5em;
          }
        }
      }

      > .item-description {
        height: 5em;
        margin: 0;
        margin-bottom: 0.3em;
        overflow: hidden;
        font-size: .9em;
        line-height: 1.8em;
        text-overflow: ellipsis;
        @include clamp(3);
      }

      > .item-meta {
        height: 2em;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        overflow: hidden;
        font-size: .9em;
        line-height: 2em;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: normal;

        > .date {
          text-transform: uppercase;
        }

        > .views {
          min-width: 4rem;
        }

        > .likes {

          > .liked {
            color: $red;
          }
        }

        > .likes,
        > .comments {
          min-width: 3em;
        }

        > .date,
        > .views,
        > .comments,
        > .likes,
        > .tags,
        > .categories {
          margin-right: 1em;

          > .iconfont {
            font-size: 1em;
            margin-right: .4em;
          }
        }

        > .tags,
        > .categories {

          a {
            text-transform: capitalize;
            margin-right: .5em;
          }
        }

        > .tags {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
