const Router = require('koa-router')
const { getUserInfo, getToken } = require('../controller/user')

let user = new Router()
user
  .get('/userInfo', getUserInfo)
  .get('/token', getToken)

module.exports = user
