<script setup>
  import AppHeader from './components/AppHeader.vue'
  import AppNavbar from './components/AppNavbar.vue'
  import SectionProjects from './components/SectionProjects.vue'
  import ProjectModal from './components/ProjectModal.vue'
  import SectionSkills from './components/SectionSkills.vue'
  import AppFooter from './components/AppFooter.vue'
  import SectionAboutMe from './components/SectionAboutMe.vue'
//   import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
//   import { darkMode } from './store'
</script>

<template>
  <AppNavbar />
  <main
    class="bg-neutral-50 dark:bg-neutral-900 dark:text-gray-50 space-y-20">
    <div class="z-10 relative">
      <AppHeader />
      <SectionAboutMe />
      <SectionSkills />
      <SectionProjects />
      <AppFooter />
    </div>

    <ProjectModal />

    <!-- <DotLottieVue
      class="particles z-0 w-full fixed blur -top-1/2 left-0 scale-150"
      :background-color="darkMode.status ? '#fafafa' : '#171717'"
      autoplay
      loop
      src="/particles2.lottie" /> -->
    <svg class="fixed bottom-0 right-0 w-full opacity-30 animate-blobs" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="92" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="207" ry="91" cx="-0.4642148042227632" cy="483.12500378741913" fill="hsl(37, 99%, 67%)"></ellipse><ellipse rx="207" ry="91" cx="310.0005154634024" cy="381.37422705426985" fill="#6d28d9"></ellipse><ellipse rx="207" ry="91" cx="564.058617191487" cy="499.7024473476697" fill="#4f46e5"></ellipse><ellipse rx="207" ry="91" cx="817.9463066436153" cy="398.20286539796604" fill="#be185d"></ellipse></g></svg>
  </main>
</template>
