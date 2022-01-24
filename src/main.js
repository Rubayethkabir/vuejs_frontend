import Vue from "vue";
import VueGoogleMap from "vuejs-google-maps";
import "vuejs-google-maps/dist/vuejs-google-maps.css";
import App from "./App.vue";
import "./plugins";
import i18n from "./plugins/i18n";
import router from "./router";
import store from "./store";

Vue.use(VueGoogleMap, {
  load: {
    apiKey: "AIzaSyD49uvKgTFoBS0UR2oaPBJviaDrYW1L9uk",
    libraries: [
      /* rest of libraries */
    ]
  }
});

var filter = function(text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter("truncate", filter);

// Vue.use(VueExtendLayout);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  ...App
  // ...layout
});
