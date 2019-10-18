import Vue from 'vue'
import i18nConfig from '@/config/i18n.config'
import { i18nTransfer } from '@/transforms/i18n'

// 语言格式转换
const i18nData = i18nTransfer(i18nConfig)

// mixins
Vue.mixin({
  computed: {
    $i18n () {
      return i18nData[this.$store.state.global.language]
    }
  }
})
