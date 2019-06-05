import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyB7a04Vkgao5q5ZM8TJrkNLt6OGuDM_5n0',
    libraries: 'places'
  }
})
new Vue({
  render: h => h(App)
}).$mount("#app");
