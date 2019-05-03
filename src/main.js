import Vue from 'vue'
import App from './App.vue'
import SuppliersMap from "./SuppliersMap";
import SuppliersList from "./SuppliersList";
import VueRouter from 'vue-router'
import Supplier from "./Supplier";
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBQigBAzaRVTRgtfHgmKoj6PHee7DUL76Y',
    }
})

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