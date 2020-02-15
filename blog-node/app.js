const querystring = require('querystring')
const blogRoute = require('./src/router/blog')
const userRoute = require('./src/router/user')
const getPostData = req => {
  const promise = new Promise(resolve => {
    const {method, headers} = req
    if (method !== 'POST' || headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data' , chunk => {
      postData += chunk
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type', 'application/json')

  // 获取path和query
  const urlArr = req.url.split('?')
  req.path = urlArr[0]
  req.query = querystring.parse(urlArr[1])

  getPostData(req).then(postData => {
    req.body = postData
    // 博客路由
    const blogResult = blogRoute(req, res)
    if (blogResult) {
      blogResult.then(data => {
        res.end(JSON.stringify(data))
      })
      return
    }

    // 用户路由
    const userData = userRoute(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }
  
    // 错误路由
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.end('404')
  })
}

module.exports = serverHandle