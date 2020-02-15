class baseModel {
  constructor (data, msg) {
    if (typeof(data) === 'String') {
      this.msg = data
      data = null
      msg = null
    }
    if (data) this.data = data
    if (msg) this.msg = msg
  }
}

class sucModel extends baseModel {
  constructor (data, msg) {
    super(data, msg)
    this.code = 1000
  }
}

class errModel extends baseModel {
  constructor (data, msg) {
    super(data, msg)
    this.code = -1
  }
}

module.exports = {
  sucModel,
  errModel
}