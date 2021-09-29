import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      firstVariable: 0,
      secondVariable: 0,
      operationType: 'sum',
    };
  },
  computed: {
    resultOutput() {
      let result = 0;
      switch (this.operationType) {
        case 'sum':
          result = Number(this.firstVariable) + Number(this.secondVariable);
          break;
        case 'subtract':
          result = Number(this.firstVariable) - Number(this.secondVariable);
          break;
        case 'multiply':
          result = Number(this.firstVariable) * Number(this.secondVariable);
          break;
        case 'divide':
          result = Number(this.firstVariable) / Number(this.secondVariable);
          break;
      }
      return result;
    },
  },
});

vm.mount('#app');
