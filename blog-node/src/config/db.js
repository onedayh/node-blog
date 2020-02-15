const env = process.env.NODE_ENV
let MYSQL_CONFIG = null

if (env === 'dev') {
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'myBlog'
  }
}

if (env === 'production') {
  MYSQL_CONFIG = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'myBlog'
  }
}

module.exports = {
  MYSQL_CONFIG
}