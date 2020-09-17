# render函数 

在Vue项目中, 一般通过模板(template)来创建html, 同时也提供了render函数来创建html. 在实例选项中, 如果同时有template和render函数, Vue会使用render函数来构建html. 

## 节点, 节点树, 虚拟DOM

在html文档中, 其中的元素, 文本, 注释, 标签都是节点, 节点可以有自己内部的子节点, 节点之间就形成了一个节点树, 一个html文档中, 根节点就是document元素. html就是通过这种关系来响应节点的变化, 当节点发生改变时, 浏览器会重新渲染节点树. 在Vue中, 不直接监听节点, 节点树的变化来操纵DOM, 而是通过虚拟DOM来追踪真实DOM的变化, 然后在下一次事件循环的时候, 依据虚拟DOM中的变化渲染出真实的DOM. 

## createElement函数

render函数接收一个函数对象作为参数, 该参数就是createElement函数, createElement用于创建虚拟DOM, 一般简称为VNode

### createElement函数参数说明

createElement函数接收三个参数, 参数说明如下: 

* 第一个参数可以是一个html标签名称, 或者组件名称, 表示创建指定的标签元素或组件
* 第二个参数接收一个元素或者组件的数据对象, 该参数可选
* 第三个参数接收创建的VNode的子虚拟DOM, 该参数的值可以是字符串(通过字符串来创建子虚拟DOM), 或者是一个VNode的数组作为该虚拟DOM的子节点, 该数组中的VNode必须都是唯一, 也就是该数组中不能存在两个或以上的相同VNode. 

#### VNode数据对象

createElement函数的第二个参数表示的就是VNode的数据对象, 和Vue实例的数据对象有些类似, 具体的可以[参考这里](https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0)




 