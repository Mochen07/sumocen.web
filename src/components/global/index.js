import EmptyComponent from './empty/empty'
import ColorBlockBox from './color-block/block'
import LoadingBox from './loading/loading'

const GlobalComponents = {
  install (Vue) {
    Vue.component(EmptyComponent.name, EmptyComponent)
    Vue.component(ColorBlockBox.name, ColorBlockBox)
    Vue.component(LoadingBox.name, LoadingBox)
  }
}

export default GlobalComponents
