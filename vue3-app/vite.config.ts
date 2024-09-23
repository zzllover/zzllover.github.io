import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    // 公共配置
    plugins: [vue(), vuetify()],

  };
  if (mode === 'development') {
    return {
      // dev 独有配置
      ...config,
    };
  }
  else {
    return {
      // build 独有配置
      base: 'https://liudingliujia.cn/statics/vue3-app/',
      ...config,
    };
  }
});
