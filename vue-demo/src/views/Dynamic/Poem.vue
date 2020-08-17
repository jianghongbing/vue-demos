<template>
  <div class="dynamic-poem">
    <h3>山居秋暝</h3>
    <h4>唐代：王维</h4>
    <pre>
    空山新雨后，天气晚来秋。
    明月松间照，清泉石上流。
    竹喧归浣女，莲动下渔舟。
    随意春芳歇，王孙自可留。
    </pre>
  </div>
</template>

<script>
export default {
  name: 'vd-poem',
}
</script>

<style scoped lang='scss'>
.dynamic-poem {
  padding: 10px;
  border-radius: 8px;
  border: 2px dashed purple;
  text-align: center;
  line-height: 1.3;
  h3 {
    color: orange;
  }
  h4 {
    color: orangered;
  }
}
</style>