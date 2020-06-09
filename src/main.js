import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'AIzaSyCSWgTIls58vLiEm99B7Oj5d9F-4MYD8Ms',
    libraries: 'places'
  }
})
new Vue({
  render: h => h(App)
}).$mount("#app");
