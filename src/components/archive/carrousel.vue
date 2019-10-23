<template>
  <div class="carrousel">
    <swiper
      key="swiper"
      class="swiper index"
      :options="swiperOption"
      @transitionStart="handleSwiperTransitionStart"
      @transitionEnd="handleSwiperTransitionEnd"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide slide-item" v-for="banner in banners">
          <img :src="banner" alt=""/>
        </div>
      </div>
      <!--指示器-->
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      // 模拟数据
      banners: ['https://static.surmon.me/Fh_ClBKvuODidaV8qhO3xBOu7C2d?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim', 'https://static.surmon.me/FmzWazqBZBT5J9SQSxQNae6VCeYc?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim', 'https://static.surmon.me/Fh_ClBKvuODidaV8qhO3xBOu7C2d?imageView2/1/w/1190/h/420/format/webp/interlace/1/q/80|watermark/2/text/U3VybW9uLm1l/font/Y2FuZGFyYQ==/fontsize/680/fill/I0ZGRkZGRg==/dissolve/30/gravity/SouthWest/dx/30/dy/15|imageslim'],
      renderSwiper: true,
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
        simulateTouch: true,
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
      }
    }
  }
</style>
