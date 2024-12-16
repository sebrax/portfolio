<script setup>
import AppHeader from './components/AppHeader.vue'
import SectionProjects from './components/SectionProjects.vue'
import ProjectModal from './components/ProjectModal.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
	<main class="bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50">
		<AppNavbar />
		<AppHeader class="z-10" />
		<SectionProjects />
		<AppFooter />
		
		<ProjectModal />
	</main>
</template>
