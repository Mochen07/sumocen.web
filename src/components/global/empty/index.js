import EmptyComponent from './empty'

const empty = {
  install (Vue) {
    Vue.component(EmptyComponent.name, EmptyComponent)
  }
}

export default empty
