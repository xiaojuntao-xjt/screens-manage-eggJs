'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.add.index);
  router.post('/add', controller.add.add);
  router.get('/list', controller.list.list);
  router.get('/getList', controller.list.getList);
};
