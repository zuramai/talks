import svgLoader from 'vite-svg-loader'
import Icons from "unplugin-icons/vite"

export default {
  plugins: [
    svgLoader(), 
    Icons({
    })
  ],
}