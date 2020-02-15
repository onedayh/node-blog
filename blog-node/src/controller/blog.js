const {exec} = require('../db/mysql')

const getBlogList = (author, keyword) => {
  let sql = `select * from blog where 1=1 `
  if (author) sql += `and author='${author}' `
  if (keyword) sql += `and title like '%${keyword}%' `
  sql += `order by createTime desc`
  return exec(sql)
}

const getBlogDetail = id => {
  return {id: 1, title: 'title1', content: 'content1', author: 'author1', createTime: 1579509705441}
}

const addBlog = blogData => {
  return {
    id: 3
  }
}

const editBlog = (id, blogData) => {
  return true
}

const deleteBlog = id => {
  return true
}

module.exports = {
  getBlogList,
  getBlogDetail,
  addBlog,
  editBlog,
  deleteBlog
}