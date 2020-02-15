const mysql = require('mysql')
const {MYSQL_CONFIG} = require('../config/db')

// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG)
// 开始连接
connection.connect()

// 统一执行mysql的函数
const exec = sql => {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, data) => {
      if (!err) {
        resolve(data)
        return
      }
      reject(err)
    })
  })
  return promise
}

module.exports = {
  exec
}