// style
import './style/style.sass';

// imports
import Vue from 'vue'
import App from './app.vue'

// app
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    render: h => h(App)
});