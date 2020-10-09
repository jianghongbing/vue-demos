<template>
  <div class="nest-route">
    点击下面的按钮后, 观察浏览器地址变化
    <br />
    <br />
    <button @click="buttonClickHandler">
      {{ showA ? "show B" : "show A" }}
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'vrd-nest-route',
  data() {
    return {
      showA: true,
    }
  },
  methods: {
    buttonClickHandler() {
      this.showA = !this.showA;
      if (this.showA) {
        this.$router.replace('/nestroute/a')
      } else {
        this.$router.replace('/nestroute/b')
      }
    }
  }
}
</script>

<style scoped>
.nest-route {
  padding: 15px;
}
.nest-route > button {
  background: #33ac23;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
  border-style: none;
  outline: none;
}
</style>