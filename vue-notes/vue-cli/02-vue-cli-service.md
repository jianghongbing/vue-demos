# VUE CLI 服务

在一个 Vue CLI 项目中, @vue/cli-service 安装了一个名为 vue-cli-service 的命令. 你可以在 npm scripts 中以 vue-cli-service、或者从终端中以 ./node_modules/.bin/vue-cli-service 访问这个命令.
通过 VUE CLI 创建的默认项目中在 package.json 文件中默认配置 script选项如下: 

```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
```
配置之后, 就可以在项目中使用npm run serve或者npm run build去本地调试项目或者构建版本. 也可以通过npx vue-cli-service的形式直接运行指定的命令. 

## vue-cli-serve常用命令和选项

* serve: 会开启一个服务器, 在本地运行项目. 
  * --open: 在服务器启动时自动打开浏览器
  * --copy: 在服务器启动时将 URL 复制到剪切版
  * --mode: 指定环境模式, 默认值为development
  * --host: 指定 host, 默认值0.0.0.0, 也就是localhost
  * --port: 指定本地服务器端口, 默认为8080
  * --https: 是否使用https, 默认为false
* build: 构建用于生产环境的包, 包默认生成在dist目录中
  * --mode: 指定环境模式, 默认值production
  * --dest: 指定输出目录, 默认为dist
  * --modern: 面向现代浏览器带自动回退地构建应用
  * --target: app | lib | wc | wc-async, 默认值app
  * --name: 库或 Web Components模式下的名字. 默认值为package.json 中的name字段或入口文件名
  * --no-clean: 在构建项目之前不清除目标目录
  * --report: 生成report.html以帮助分析包内容
  * --report-json: 生成report.json以帮助分析包内容
  * --watch: 监听文件变化
* inspect: 审查项目中的webpack config
  * --mode: 指定环境模式
* help: 通过help来查看所有的vue-cli-service中可使用的所有命令

