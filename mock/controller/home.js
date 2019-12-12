// 控制层  控制路由的页面显示的具体函数实现

exports.getTxt = async ctx => {
  ctx.body = {
    data: '我是首页的数据'
  }
}

