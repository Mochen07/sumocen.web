import EmptyComponent from './empty/empty'
import ColorBlockBox from './color-block/block'

const GlobalComponents = {
  install (Vue) {
    Vue.component(EmptyComponent.name, EmptyComponent)
    Vue.component(ColorBlockBox.name, ColorBlockBox)
  }
}

export default GlobalComponents
