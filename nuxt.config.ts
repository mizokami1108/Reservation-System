// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import BasicAuth from "nuxt-basic-authentication-module";
import { resolve } from "path";
// require("dotenv").config();
// const { BASIC_AUTH_PASS } = process.env;

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "席取くん",
    },
  },
  alias: {
    "~": resolve(__dirname, "."),
    "@": resolve(__dirname, "."),
  },
  compatibilityDate: "2024-04-03",
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@mdi/font/css/materialdesignicons.css",
    "vuetify/styles",
  ],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  plugins: ["~/plugins/vuetify.ts"],
  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },

    [BasicAuth, { enabled: true }],
    // ...
  ],
  typescript: {
    strict: true, // 型の厳格チェックを有効化
  },
  runtimeConfig: {
    // basic認証
    basicAuth: {
      pairs: {
        admin: "Password",
      },
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
