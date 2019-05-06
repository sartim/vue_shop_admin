import Vue from 'vue';

import config from 'config';
import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
import VueSocketIO from 'vue-socket.io';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

Vue.use(new VueSocketIO({
    debug: true,
    connection: `${config.apiUrl}`,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    // options: { path: "/my-app/" } //Optional options
}));

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});