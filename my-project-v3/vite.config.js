import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'
// import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'


import path from "path"

const CWD = process.cwd()

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, CWD)

  const { VITE_PUBLIC_PATH } = env

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      // note： 按需加载 element-plus 组件 有效；但是对 ElMessage  这类组件无效
      // ViteComponents({
      //   customComponentResolvers: [ElementPlusResolver()],
      // }),
      // //按需导入element-plus的css样式
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'element-plus',
      //       esModule: true,
      //       resolveStyle: name => {
      //         return `element-plus/lib/theme-chalk/${name}.css`
      //       },
      //     },
      //   ],
      // })
    ],
    build: {
      assetsDir: 'static',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    server: {
      proxy: {
        '^/lsbdb/api': {
          target: 'http://10.192.195.165:17077',
          changeOrigin: true,
        }
      }
    }
  }
})
