// 控制层  控制路由的页面显示的具体函数实现

exports.getTxt = async ctx => {
  ctx.body = {
    data: [
      {
        id: 10,
        btitle: 'BLOCK_HEIGHT',
        bread: '558708',
        bcomment: 0
      }
    ]
  }
}

exports.getUserInfo = async ctx => {
  ctx.body = {
    data: {
      userName: 'nordon',
      age: 18,
      query: ctx.request.body
    }
  }
}
