const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32
})

module.exports = {
  publicPath: './',
  devServer: {
   proxy: {
     '/api': { 
       target: 'http://10.24.34.207:5000/', 
       changeOrigin: true, 
       ws: true, 
       pathRewrite: { '^/api':  '/api', }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}