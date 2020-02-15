const {getBlogList, getBlogDetail, addBlog, editBlog, deleteBlog} = require('../controller/blog')
const {sucModel, errModel} = require('../model/resModel')

const blogRoute = (req, res) => {
  const {method, path, query, body} = req
  if (method === 'GET') {
    // 博客列表
    if (path === '/api/blog/list') {
      const {author = '', keyword = ''} = query
      return getBlogList(author, keyword).then(data => {
        return new sucModel(data)
      })
    }
    // 博客详情
    if (path === '/api/blog/detail') {
      const data = getBlogDetail(query.id)
      return new sucModel(data)
    }
  } else if (method === 'POST') {
    // 新增博客
    if (path === '/api/blog/add') {
      const data = addBlog(body)
      return new sucModel(data)
    }
    // 编辑博客
    if (path === '/api/blog/edit') {
      const result = editBlog(query.id, body)
      return result ? new sucModel('编辑成功') : new errModel('编辑失败')
    }
    // 删除博客
    if (path === '/api/blog/delete') {
      const result = deleteBlog(query.id)
      return result ? new sucModel('删除成功') : new errModel('删除失败')
    }
  }
}

module.exports = blogRoute