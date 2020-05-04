console.log('开发环境：', process.env.NODE_ENV)
var ENV = process.env.NODE_ENV;
var URL1,URL2;
if (ENV == 'development') {
  URL1 = 'http://localhost:2243'; // node服务器
  URL2 = 'http://localhost:7868'; // node服务器

} else if (ENV == 'production') {
  // URL1 = 'https://bx.zhenguanyu.com'; // 报销系统后端-线上
}
module.exports = {
  // 上测试环境该配置不生效
  devServer: {
    // host: 'local.guan.com',
    port: 9983,
    proxy: {
      '^/blog': {
        target: URL1,
        changeOrigin: true,
      },
      '^/api': {
        target: URL2,
        changeOrigin: true,
      },
    },
  },
  // publicPath: '/new/',
}