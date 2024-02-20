<template>
	<div id="app">
		<navigation />
		<router-view></router-view>
		<comp-footer />
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import CompFooter from './components/CompFooter.vue';

export default {
	name: 'app',
	components : {
		Navigation,
		CompFooter,
	}
}
</script>

<style>
	
</style>
