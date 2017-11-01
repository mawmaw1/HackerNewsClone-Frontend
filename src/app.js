// style
import './style/style.sass';

// imports
import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'

Vue.use(Router);

// app
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    render: h => h(App),
    router: new Router()
});