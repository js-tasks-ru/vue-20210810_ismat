import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
  },
});

vm.mount('#app');
