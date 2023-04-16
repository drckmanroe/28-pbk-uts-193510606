import Vuex from 'vuex';
import tasks from './modules/tasks';

// STATE
const state = {
	pageTitle: 'TO DO APP'
};

// GETTERS
const getters = {
	getPageTitle(state) {
		return state.pageTitle;
	}
};

// MUTACTIONS
const mutations = {};

// ACTIONS
const actions = {};

// MODULES
const modules = {
	tasks
};

// CREATE STORE
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules
});

export default store;