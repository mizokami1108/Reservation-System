// plugins/vuetify.ts
import vuetify from "../utils/vuetify"; // 相対パスで指定

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify);
});
