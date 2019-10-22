import i18nConfig from '@/config/i18n.config'
import { i18nTransfer } from '@/transforms/i18n'

// 语言格式转换
export const i18nData = i18nTransfer(i18nConfig)
