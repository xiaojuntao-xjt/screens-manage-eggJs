/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606570773729_6023';

  // add your middleware config here
  config.middleware = ['auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 为了解决安全跨站请求伪造（开发）, 默认开启
  config.security = {
    csrf: {
      enable: false
    }
  }

  // 配置模版引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.multipart = {
    mode: 'file',
  };

  // 数据库配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'mysql',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
