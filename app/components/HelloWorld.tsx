/*
 * @Author: Bin
 * @Date: 2025-11-24
 * @FilePath: /nuxt-starter/app/components/HelloWorld.tsx
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { myLayer } = useAppConfig()
    return () => {
      return <div>
        <h1>Hello World!</h1>
        <pre>{JSON.stringify(myLayer, null, "\t")}</pre>
      </div>;
    };
  },
});