import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import SuppliersList from "./SuppliersList.vue";
import SuppliersMap from "./SuppliersMap.vue";
import Supplier from "./Supplier.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/suppliers", component: SuppliersList },
  { path: "/map", component: SuppliersMap },
  { path: "/supplier", component: Supplier }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
