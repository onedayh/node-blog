const loginBlog = (userName, password) => {
  if (userName === 'liupan' && password === '123456') {
    return true
  }
  return false
}

module.exports = {
  loginBlog
}