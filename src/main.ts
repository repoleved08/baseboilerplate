import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import Toast, {PluginOptions} from 'vue-toastification'
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.use(Toast)
app.use(router).mount('#app')
