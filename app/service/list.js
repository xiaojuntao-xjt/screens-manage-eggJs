'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  async index() {
    const result = await this.app.mysql.select('screens');
    console.log('result---', result)
    let res_info = {
      code: 200,
      msg: '查询成功'
    }
    if (result) {
      res_info['data'] = result
      return res_info;
    } else {
      res_info = {
        code: 500,
        data: null,
        msg: '查询失败'
      }
      return res_info;
    }
  }
}

module.exports = ListService;
