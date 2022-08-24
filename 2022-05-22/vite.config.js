import svgLoader from 'vite-svg-loader'
import Icons from "unplugin-icons/vite"
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    svgLoader(), 
    Icons({
    }),
    Components({ /* options */ }),
  ],
}
