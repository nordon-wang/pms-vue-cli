const Router = require('koa-router')
const { getTxt } = require('../controller/home')

let home = new Router()

// 首页
home
  .get('/', getTxt)

module.exports = home
