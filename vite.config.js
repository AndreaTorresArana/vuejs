import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Esta es la línea MÁS IMPORTANTE. 
  // Le dice a Vite que tu página vivirá en el subdirectorio /vuejs/
  base: '/vuejs/'
})
