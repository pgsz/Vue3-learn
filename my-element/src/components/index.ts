import container from './container'

const components = [...container]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const install = (Vue: any) => {
  components.map(component => {
    if (!component.name && component.install) {
      Vue.use(component)
    } else {
      Vue.component(component.name, component)
    }
  })
}

export default {
  install,
}
