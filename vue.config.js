module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
      },
      scss: {
        additionalData: `@import "@/styles/common/common.scss";`
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
