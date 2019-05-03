import Vue from 'vue'
import App from './App.vue'
import SuppliersMap from "./SuppliersMap";
import SuppliersList from "./SuppliersList";
import VueRouter from 'vue-router'
import Supplier from "./Supplier";

Vue.use(VueRouter)

Vue.config.productionTip = false


const routes = [
    { path: '/SuppliersList', component: SuppliersList },
    { path: '/SuppliersMap', component: SuppliersMap },
    { path: '/supplier', component: Supplier}
]
const router = new VueRouter({
    routes
})


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
export default routes;