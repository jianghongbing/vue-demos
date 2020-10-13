# route-view

route-view是vue-router内置的一个组件, 渲染路径匹配到的视图组件. router-view 渲染的组件还可以内嵌自己的router-view, 根据嵌套路径, 渲染嵌套组件. route-view默认接收一个name属性, 主要用户命名视图上, 在同一级渲染多个组件, route-view上其他的属性会直接添加到组件上. 