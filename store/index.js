import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {header} from './header.js';
import {cart} from './cart.js';
import {products} from './products.js';

const store = () => new Vuex.Store({
    modules: {
        header,
        cart
    },
    state: {
    }
});

export default store;