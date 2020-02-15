const {loginBlog} = require('../controller/user')
const {sucModel, errModel} = require('../model/resModel')

const userRoute = (req, res) => {
  const {method, path, body} = req
  if (method === 'POST') {
    if (path === '/api/user/login') {
      // 登录
      const {userName, password} = body
      const result = loginBlog(userName, password)
      if (result) {
        return new sucModel('登录成功')
      }
      return new errModel('登录失败')
    }
  }
}

module.exports = userRoute