<template>
  <div class="announcement">
    <color-block-box
      :left="-59"
      :gray="true"
    />
    <div class="title">
      <span
        class="icon-box"
        :style="{
          transform: `rotate(-${windmillTimes * 60}deg)`
        }"
      >
        <i class="iconfont icon-windmill"></i>
      </span>
    </div>
    <transition name="module" mode="out-in">
      <swiper
        :options="swiperOption"
        ref="swiper"
        class="swiper"
        @transitionStart="handleSwiperTransitionStart"
        @transitionEnd="handleSwiperTransitionEnd"
      >
        <!-- slides -->
        <swiper-slide class="slide-item">
          <div
            class="content filter"
            :class="{
                'motion-blur-vertical-small': transitioning
              }"
          >看看这个世界</div>
          <div class="date">~ 一天前</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
          <div class="content filter" :class="{
                'motion-blur-vertical-small': transitioning
              }">到处去走走</div>
          <div class="date">~ 二天前</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
          <div class="content filter" :class="{
                'motion-blur-vertical-small': transitioning
              }">吃着火锅</div>
          <div class="date">~ 三天前</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
          <div class="content filter" :class="{
                'motion-blur-vertical-small': transitioning
              }">看着电影</div>
          <div class="date">~ 四天前</div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev">
          <i class="iconfont icon-announcement-prev"></i>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <i class="iconfont icon-announcement-next"></i>
        </div>
      </swiper>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
      transitioning: false,
      windmillTimes: 0,
      swiperOption: {
        height: 34,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          clickable: true
        },
        allowTouchMove: false,
        slidesPerView: 1,
        setWrapperSize: true,
        direction: 'vertical'
      }
    }
  },
  methods: {
    handleSwiperTransitionStart () {
      this.transitioning = true
      this.windmillTimes = this.$refs.swiper.swiper.activeIndex || 0
    },
    handleSwiperTransitionEnd () {
      this.transitioning = false
    }
  }
}
</script>
d
<style scoped lang="scss" ref="stylesheet/scss">
$announcement-height: 2.8em;

.announcement{
  height: $announcement-height;
  line-height: 2.75em;
  font-size: 0.9em;
  margin-bottom: 1em;
  overflow: hidden;
  position: relative;
  background-color: $module-bg;
  color: $reversal;

  >.title {
    float: left;
    width: 10%;
    text-align: center;
    font-size: $font-size-base;
    .icon-box {
      transform: rotate(0deg);
      display: inline-block;
    }
  }

  >.swiper {
    float: right;
    width: 90%;

    .slide-item {
      display: flex;
      justify-content: space-between;
      width: auto;
      padding-right: 3rem;
      height: $announcement-height;

      > .content {
        max-width: 76%;
        position: relative;
        @include text-overflow();

        p {
          margin: 0;
          @include text-overflow()
        }

        a {
          text-decoration: underline;
        }
      }

      .date {
        color: $dividers;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    left: auto;
    right: .5em;
    margin: 0;
    width: 2em;
    height: 1em;
    text-align: center;
    line-height: 1em;
    background-image: none;
    color: $module-hover-bg;
    cursor: pointer;

    &:hover {
      color: $text;
    }
  }

  .swiper-button-prev {
    top: .5em;
  }

  .swiper-button-next {
    top: 1.5em;
  }
}
</style>
