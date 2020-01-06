<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="footer-content">
        <span>Sumocen</span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span>
          <span>由&nbsp;</span>
          <a
            target="_blank"
            class="item"
            rel="external nofollow noopener"
            href="https://github.com/Mochen07/sumocen.web"
          >
            NodePress
          </a>
          <span>、</span>
          <a
            target="_blank"
            class="item"
            rel="external nofollow noopener"
            href="https://github.com/Mochen07/sumocen.web"
          >
            Vue
          </a>
          <span>&nbsp;和&nbsp;平平安安&nbsp;天天开心&nbsp;</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>&nbsp;快快乐乐</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'pc-footer'
}
</script>

<style lang="scss" scoped>
  footer {
    margin-top: 1em;
    @include module-blur-bg();

    .container {
      position: relative;

      .footer-content {
        padding: 1em;
        font-size: .9em;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
</style>
