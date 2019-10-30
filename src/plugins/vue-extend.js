import Vue from 'vue'
import filters from '@/filters'
import i18nConfig from '@/config/i18n.config'
import { i18nTransfer } from '@/transforms/i18n'
import GlobalComponents from '@/components/global'

// 语言格式转换
export const i18nData = i18nTransfer(i18nConfig)

// components自定义组件
Vue.use(GlobalComponents)

// filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// mixins
Vue.mixin({
  computed: {
    // 获取当前语言
    $i18n () {
      return i18nData[this.$store.state.global.language]
    }
  }
})
