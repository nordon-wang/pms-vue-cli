// 控制层  控制路由的页面显示的具体函数实现

exports.getToken = async ctx => {
  ctx.body = {
    data: 'getToken 信息'
  }
}

exports.getUserInfo = async ctx => {
  ctx.body = {
    data: {
      userName: 'nordon',
      age: 18,
      gender: 'man'
    }
  }
}
