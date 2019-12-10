const Koa = require('koa')

const server = new Koa()


server.use(async ctx => {
  ctx.body = 'hah'
})



server.listen(9999, () => {
  console.log('mock 服务启动了');
})

