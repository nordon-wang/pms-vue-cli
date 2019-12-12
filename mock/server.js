const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const router = require('./router')
const server = new Koa()

server.use(cors())
server.use(bodyParser())

// 加载路由中间件
server.use(router.routes()).use(router.allowedMethods())

server.listen(9999, () => {
  console.log('mock 服务启动了, 端口是: 9999');
})



