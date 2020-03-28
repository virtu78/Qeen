import Vue from 'vue';
import Storage from './components/Storage.vue';


import VueSelect from 'vue-select';




Vue.component("v-select", VueSelect.VueSelect);
new Vue({
    render: h => h(Storage),
}).$mount('#app');
