'use strict';

const Controller = require('egg').Controller;

class AddController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('add')
  }
  async add() {
    const { ctx } = this;
    console.log('body---', ctx.request.body, ctx.request.files)
    const screen = await ctx.service.add.index(ctx.request.body);
    console.log('screen---', screen)
    ctx.body = screen;
  }
}

module.exports = AddController;
