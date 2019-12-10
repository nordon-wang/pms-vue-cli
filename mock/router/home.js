const Router = require('koa-router')
const { getTxt, getUserInfo } = require('../controller/home')

let home = new Router()

// home.get('/', getTxt)
console.log('===>', getUserInfo);

home
.get('/', getTxt)
.get('/getUserInfo', getTxt)

module.exports = home
