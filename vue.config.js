console.log('开发环境：', process.env.NODE_ENV)
var ENV = process.env.NODE_ENV;
var URL1;
if (ENV == 'development') {
  URL1 = 'http://localhost:2243'; // 报销系统后端-测试
} else if (ENV == 'production') {
  URL1 = 'https://bx.zhenguanyu.com'; // 报销系统后端-线上
}
module.exports = {
  // 上测试环境该配置不生效
  devServer: {
    host: 'local.zhenguanyu.com',
    port: 9983,
    proxy: {
      '^/blog': {
        target: URL1,
        changeOrigin: true,
      },
    },
  },
  // publicPath: '/new/',
}