import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './goods/goods.vue';
import ratings from './ratings/ratings.vue';
import seller from './seller/seller.vue';
import top from './header/top.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(top);

const routes=[
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/seller',component:seller}
];

const router=new VueRouter({
    routes
});

const app= new Vue({
    router,
    template: `<App />`,
    components: { App }
}).$mount('#app');

router.push('/goods');