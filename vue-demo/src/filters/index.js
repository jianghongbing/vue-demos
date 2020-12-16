import Vue from 'vue';

Vue.filter('capitalize', function (value) {
  if (typeof value !== 'string') return;
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.substring(1);
});


Vue.filter('reverse', function (value) {
  if (typeof value !== 'string') return;
  if (!value) return value;
  const length = value.length - 1;
  let str = '';
  for (let index = length; index >= 0; index--) {
    str += value[index];
  }
  return str;
})
