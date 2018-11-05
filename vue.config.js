var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))

    config.module
      .rule('import-glob-loader2')
      	.test(/app.scss/)
      	.enforce('pre')
      	.use('import-glob-loader2')
        	.loader('import-glob-loader2')
        	.end()  	
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
            '^/api': '/mock'
        } 
      }
    }
  }
}
