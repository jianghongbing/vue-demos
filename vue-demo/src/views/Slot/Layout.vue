<template>
  <div class="layout">
    <template>
      <header>
        <slot name="header">header content</slot>
      </header>
      <main>
        <slot>main body</slot>
      </main>
      <footer>
        <slot name="footer">footer content</slot>
      </footer>
    </template>
  </div>
</template>

<script>
export default {
  name: 'vd-layout',
}
</script>

<style scoped lang='scss'>
.layout {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  header {
    font-size: 30px;
    height: 44px;
    line-height: 44px;
    flex: none;
    background: pink;
    color: white;
  }
  main {
    flex: 1;
    background: green;
    
  }
  footer {
    font-size: 20px;
    height: 44px;
    line-height: 44px;
    flex: none;
    background: orangered;
    color: white;
  }
}
</style>