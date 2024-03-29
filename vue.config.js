const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack(config){
        //排除icons目录中svg文件处理
        config.module
            .rule('svg')
            .exclude.add(resolve('src/svg/icons'))
            .end()
        //设置svg-sprite-loader处理icons目录中的svg
        config.module
            .rule('icons')
            .test(/.svg$/)
            .include.add(resolve('src/svg/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader("svg-sprite-loader")
            .options({symbolId:'icon-[name]'})
            .end()
    }
}