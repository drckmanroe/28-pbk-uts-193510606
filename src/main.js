import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import Vuex from 'vuex';
import './assets/images/icons/icons-import.js';
import UIIcon from './components/UI/UIIcon.vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
	faEdit,
	faTrash,
	faCheckCircle,
	faPlusCircle,
	faTimes,
	faInfo,
    faEye
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faEdit, faTrash, faCheckCircle, faPlusCircle, faTimes, faInfo, faEye);
const app = createApp(App);
app.component('UIIcon', UIIcon);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(Vuex);
app.use(store);
app.mount('#app');