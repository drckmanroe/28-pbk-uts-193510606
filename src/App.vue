<template>
	<div id="app">
		<PageTitle :title="getPageTitle" />
		<Dashboard />
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import PageTitle from './components/Page/PageTitle.vue';
	import Dashboard from './components/Dashboard/Dashboard.vue';

	export default {
		components: {
			PageTitle,
			Dashboard,
		},
		computed: {
			...mapGetters(['getPageTitle'])
		}
	};
</script>

<style lang="scss">
	#app {
		width: 100%;
	}

	[v-cloak] {
		display: none;
	}
</style>