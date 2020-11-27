# JSX 

在render函数中, 使用createElement函数来创建虚拟DOM的方式比较繁琐, 使用JSX来代替createElement函数会使代码简洁的多. 在Vue项目使用JSX前, 需要安装@vue/babel-preset-jsx和@vue/babel-helper-vue-jsx-merge-props这两个插件. JSX的语法可以参考[React的官方文档](https://react.docschina.org/docs/introducing-jsx.html), JSX可以看做是createElement函数的语法糖, 最终还是需要通过createElement函数来创建虚拟DOM. 