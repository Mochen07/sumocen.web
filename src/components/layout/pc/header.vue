<template>
  <div id="header" class="header">
    <nav class="nav-bar">
      <div class="nav-bar-container container">
        <div class="nav-bar-header">
          <img src="/images/logo.svg" class="nav-bar-logo" />
          <span class="nav-bar-slogan" v-text="$i18n.text.slogan"></span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
.header{

  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    z-index: 999;
    background-color: $module-bg;
    @include backdrop-blur();

    .nav-bar-container{
      height: $header-height;
      display: flex;
      justify-content: space-between;

      .nav-bar-header{
        height: $header-height;
        display: flex;
        position: relative;
        align-items: center;

        @keyframes logo-blink {
          0% { mask-position: -30% }
          100% { mask-position: 666% }
        }

        .nav-bar-logo{
          width: 11rem;
          margin-right: 4rem;
          filter: $theme-logo-rotate;
          mask-size: 88%;
          mask-position: -30%;
          mask-image: linear-gradient(
              to bottom right,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.9),
              rgba(255, 255, 255, 0.2)
          );
          animation: logo-blink 8s ease-in 1s infinite;

          .logo-st {
            fill: $primary;
          }
        }

        .nav-bar-slogan{
          color: $primary;
          font-family: webfont-normal, DINRegular;
        }
      }
    }
  }
}
</style>
