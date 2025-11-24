import { defineComponent } from 'vue';
import { HelloWorld } from '#components';

export default defineComponent({
  setup() {
    return () => {
      return <HelloWorld />;
    };
  },
});