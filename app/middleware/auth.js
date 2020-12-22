module.exports = (opt, app) => {
    return async function auth(ctx, next) {
        // 设置模版全局变量
        ctx.state.csrf = ctx.csrf;
        await next()
    }
}