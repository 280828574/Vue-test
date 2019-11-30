vue-cli3.0体验
        1.自带环境变量
            1.1只需要在根目录新建.env.xxx文件里面写环境变量
                .env.stage
                    NODE_ENV = 'production'
                    VUE_APP_SECRET = 'stage'
            1.2.在package.json里面添加启动命令  --mode xxx(此处的xxx需要与根目录.env.xxx文件的xxx对应)
                "scripts": {
                    "dev-t": "vue-cli-service serve --mode test",
                    "dev-s": "vue-cli-service serve --mode stage",
                  },
            1.3.在需要的地方直接使用  process.env.VUE_APP_SECRET  即可
        2.vue.config.js是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
           你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。这个文件应该导出一个包含了选项的对象：
           module.exports = {
             // 选项...
           }

        2.1.devServer设置
        module.exports = {
              devServer: {
                  host: '0.0.0.0', // 可以通过localhost,127.0.0.1,本机的内网IP进行访问（IP的话，就可以在别人的电脑上访问）
                  port: 8088, // 端口
                  // 本地代理
                  在 项目中安装axios
                      cnpm install axios -S
                  在 项目中安装http-proxy-middleware中间件作为代理
                      cnpm install -D http-proxy-middleware
                  proxy: {
                    '/api': {
                        target: 'http://xxx.org',   // 你请求的第三方接口
                        changeOrigin: true,
                        secure: false,
                        logLevel: 'debug',
                        router: {}
                    }
                  },
              },
              // 自定义路径
              chainWebpack: config => {
                  config.resolve.alias
                      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
              }
          }
     3.vuex/router/scripts/constant 引入方式和2.0基本一致
        3.1.暴漏方式 module.exports = {} 需改成 export default modules
