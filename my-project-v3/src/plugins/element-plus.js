import 'element-plus/dist/index.css'
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
]

const plugins = []

export function setupElementPlus(app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
