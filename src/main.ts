import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";

import apolloClient from "./graphql/client"
import { provideApolloClient } from '@vue/apollo-composable'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp({
    setup () {
        provideApolloClient(apolloClient)
    },
    render: () => h(App),
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).mount("#app")