'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async list() {
    const { ctx } = this;
    await ctx.render('list') // 渲染页面
  }
  async getList() {
    const { ctx } = this;
    const screenList = await ctx.service.list.index();
    console.log('screenList---', screenList)
    ctx.body = screenList;
  }
}

module.exports = ListController;
