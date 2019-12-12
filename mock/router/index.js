const Router = require('koa-router')
const home = require('./home')
const user = require('./user')


// 装载所有子路由
let router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())

module.exports = router