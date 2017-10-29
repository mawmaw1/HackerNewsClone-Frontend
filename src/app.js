// style
import './style/style.sass';

// imports
import Vue from 'vue'
import App from './app.vue'

console.log('yo');
console.log(App);

// app
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    render: h => h(App)
});

