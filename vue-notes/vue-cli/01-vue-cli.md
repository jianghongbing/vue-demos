# Vue CLI

## 介绍

Vue CLI是一个基于Vue.js进行快速开发的完整系统, 提供了以下的功能: 

* 通过@vue/cli实现的交互式的项目脚手架. 
* 通过@vue/cli + @vue/cli-service-global实现的零配置原型开发. 
* 运行时依赖(@vue/cli-service), 该依赖有以下几个特点: 
  * 可升级
  * 基于webpack构建, 并带有合理的默认配置；
  * 可以通过项目内的配置文件进行配置
  * 可以通过插件进行扩展
* 一个丰富的官方插件集合, 集成了前端生态中最好的工具
* 一套完全图形化的创建和管理Vue.js项目的用户界面

Vue CLI 致力于将 Vue 生态中的工具基础标准化. 它确保了各种构建工具能够基于智能的默认配置即可平稳衔接, 这样你可以专注在撰写应用上, 而不必花好几天去纠结配置的问题. 与此同时, 它也为每个工具提供了调整配置的灵活性, 无需eject. 

## VUE CLI组成

Vue CLI有以下几个部分组成

### CLI
CLI(@vue/cli)是一个全局安装的npm包,提供了终端里的vue命令.

### CLI 服务
CLI 服务 (@vue/cli-service) 是一个开发环境依赖.它是一个 npm 包,局部安装在每个 @vue/cli 创建的项目中.CLI 服务是构建于 webpack 和 webpack-dev-server 之上的.包含了以下的功能：
* 加载其它 CLI 插件的核心服务
* 一个针对绝大部分应用优化过的内部的 webpack 配置
* 项目内部的 vue-cli-service 命令,提供 serve、build 和 inspect 命令

### CLI 插件
CLI 插件是向你的 Vue 项目提供可选功能的 npm 包,例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等.Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头,非常容易使用.当你在项目内部运行 vue-cli-service 命令时,它会自动解析并加载 package.json 中列出的所有 CLI 插件.

## VUE CLI安装和更新

通过npm install -g @vue/cli命令可以全局安装VUE CLI, 之后可以通过其提供的命令来创建项目；通过npm update -g @vue/cli来升级全局的VUE CLI包

### VUE CLI常用到的命令和命令选项说明

* create: 使用create命令来创建vue项目.create命令可接收以下面的选项
  * -p, --preset presetName       忽略提示符并使用已保存的或远程的预设选项
  * -d, --default                 忽略提示符并使用默认预设选项
  * -i, --inlinePreset            忽略提示符并使用内联的 JSON 字符串预设选项
  * -m, --packageManager          在安装依赖时使用指定的 npm 客户端
  * -r, --registry url            在安装依赖时使用指定的 npm registr
  * -g, --git message             强制 / 跳过 git 初始化,并可选的指定初始化提交信息
  * -n, --no-git                  跳过 git 初始化
  * -f, --force                   覆盖和项目同名的文件夹
  * -c, --clone                   使用 git clone 获取远程预设选项
  * -x, --proxy                   使用指定的代理创建项目
  * -b, --bare                    创建项目时省略默认组件中的新手指导信息
  * -h, --help                    输出使用帮助信息
* ui: 通过VUE CLI提供的图形界面化网页来创建工程
* -V: 全写--version, 来查看当前VUE CLI的版本
* -h: 全写--help, 来查看VUE CLI命令的相关信息
* serve: 在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器
  * -o, --open: 是否自动打开浏览器
  * -c, --copy: 复制当前url到剪切板
  * -p, --port port: 指定服务器的端口, 默认为8080
  * -h, --help: serve命名使用帮助信息
* build: 在生产环境模式下零配置构建一个 .js 或 .vue 文件
  * -t, --target target: 构建目标(app | lib | wc | wc-async), 默认值:app
  * -n, --name name: 库的名字或Web Components 组件的名字, 默认值:入口文件名
  * -d, --dest dir: 输出目录, 默认值dist
  * -h, --help: build命令使用帮助信息
* add: 为VUE项目添加指定的插件


