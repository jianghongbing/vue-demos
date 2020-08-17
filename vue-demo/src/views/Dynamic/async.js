import Loading from './Loading.vue';
import Error from './Error.vue';

const AsyncComponent = () => ({
  // component: import('./Async1.vue'),
  component: import('./Async.vue'),
  loading: Loading,
  error: Error,
  delay: 2000,
  timeout: 3000,
})

export default AsyncComponent;