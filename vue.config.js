// const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devServer:{
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/setSize.scss";`
      }
    }
  }
}
