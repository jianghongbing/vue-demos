<template>
  <div class="slot">
    <SlotButton @click.native="clickHandler">OK</SlotButton>
    <br />
    <br />
    <SlotButton></SlotButton>
    <br />
    <br />
    <SlotButton @click.native="count++">{{count}}</SlotButton>
    <br />
    <br />
    <Layout>
      <template v-slot:header>
        <h4>这是页面头部</h4>
      </template>
      <!-- <template v-slot:default>
        这是页面主体
      </template>-->
      <div>这是页面主体内容1</div>
      <template #footer>这是页面底部</template>
      <div>这是页面主体内容2</div>
    </Layout>
    <ScopeSlot :info="userInfo">
      <template v-slot:default="user">
        <p>name is {{user.info.name}}</p>
        <p>age is {{user.info.age}}</p>
      </template>
    </ScopeSlot>
    <ScopeSlot :info="userInfo">
      <template v-slot="user">
        <p>name is {{user.info.name}}</p>
        <p>age is {{user.info.age}}</p>
      </template>
    </ScopeSlot>
    <ScopeSlot :info="userInfo">
      <template v-slot:default="{info}">
        <p>name is {{info.name}}</p>
        <p>age is {{info.age}}</p>
      </template>
    </ScopeSlot>
  </div>
</template>

<script>
import SlotButton from './SlotButton';
import Layout from './Layout';
import ScopeSlot from './ScopeSlot';
export default {
  name: 'vd-slot',
  components: {
    SlotButton,
    Layout,
    ScopeSlot,
  },
  data() {
    return {
      count: 0,
      userInfo: {
        name: 'Mark Jiang',
        age: 10,
      },
    }
  },
  methods: {
    clickHandler() {
      alert('button Clicked');
    }
  },
}
</script>

<style scoped lang='scss'>
.slot {
  padding: 15px;
  text-align: center;
}
</style>