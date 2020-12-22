'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class AddService extends Service {
  async index(body) {
    console.log('body---', body)
    const row = {
      projectName: body.projectName,
      projectUrl: body.projectUrl,
      gitUrl: body.gitUrl,
      projectMembers: body.projectMembers,
      projectRemarks: body.projectRemarks,
      projectUpdateTime: body.projectUpdateTime,
      // createTime: body.createTime
      createTime: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
    }
    console.log('createTime---', moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'))
    const result = await this.app.mysql.insert('screens', row);
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    let res_info = {
      code: 200,
      msg: '提交成功'
    }
    if (insertSuccess) {
      res_info['data'] = { ...row }
      return res_info
    } else {
      res_info.code = 500
      res_info.msg = '提交失败'
      res_info['data'] = null
      return res_info;
    }
  }
}

module.exports = AddService;
