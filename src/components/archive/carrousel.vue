<template>
  <div class="carrousel">
    <swiper
      key="swiper"
      class="swiper index"
      :options="swiperOption"
      @transitionStart="handleSwiperTransitionStart"
      @transitionEnd="handleSwiperTransitionEnd"
    >
      <div class="swiper-slide slide-item" v-for="banner in banners">
        <div
          class="content filter"
          :class="{ 'motion-blur-horizontal': transitioning }"
        >
          <img :src="banner" alt=""/>
          <span class="title">好好说话</span>
        </div>
      </div>
      <!--指示器-->
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import BannerDemoImage from '@/assets/image/banner/hello-world.jpg'
export default {
  name: 'carrousel',
  data () {
    return {
      // 模拟数据
      banners: ['', '', '', ''].fill(BannerDemoImage),
      renderSwiper: true,
      transitioning: false,
      swiperOption: {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        mousewheel: true,
        observeParents: true,
        // 禁用 PC 拖动手指样式
        grabCursor: false,
        // 警用 PC 拖动
        simulateTouch: false,
        preloadImages: false,
        lazy: true
      }
    }
  },
  methods: {
    handleSwiperTransitionStart () {
      this.transitioning = true
    },
    handleSwiperTransitionEnd () {
      this.transitioning = false
    }
  }
}
</script>

<style lang="scss">
  .index.swiper {

    .swiper-pagination {

      .swiper-pagination-bullet {

        &.swiper-pagination-bullet-active {
          width: 2rem;
          border-radius: 10px;
        }
      }
    }
  }
</style>

<style scoped lang="scss" ref="stylesheet/scss">
  $pc-carrousel-height: 15em;

  .carrousel {
    height: $pc-carrousel-height;
    margin-bottom: 1em;
    position: relative;
    overflow: hidden;
    @include module-blur-bg();

    .swiper {

      .slide-item {

        img {
          width: 100%;
          @include css3-prefix(transform, scale(1));
          @include css3-prefix(transition, transform .88s);

          &:hover {
            @include css3-prefix(transform, scale(1.06));
          }
        }

        .title {
          position: absolute;
          margin: 0;
          top: 1.5rem;
          right: 2rem;
          color: $link-color;
          padding-right: .6em;
          padding-left: 1em;
          height: 2em;
          line-height: 2em;
          font-size: 1em;
          font-weight: bold;
          border-radius: 1px;
          letter-spacing: .3px;
          max-width: 75%;
          @include text-overflow;

          -webkit-background-clip: text;
          // background-color: $module-hover-bg-opacity-9;
          background: linear-gradient(90deg, transparent 0%, $module-bg 2em, $module-bg-opacity-9, $reversal);

          &:hover {
            color: $text-darken;
            // background: none;
            padding-left: .6em;
            background-color: $module-bg;
          }
        }
      }
    }
  }
</style>
