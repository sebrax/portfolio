<template>
    <section class="relative">
        <div class="z-10 relative p-5 lg:p-10 space-y-10">
            <h2 class="text-5xl font-bold">{{ $t('jobs') }}</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <li v-for="project in projects" :key="project">
                    <a href="#" @click.prevent="SelectedProject = project; showModal = true">
                        <article class="p-5 border border-neutral-100 dark:border-indigo-600/70 bg-white/30 dark:bg-neutral-800/50 dark:hover:bg-gradient-to-tr from-indigo-600 via-violet-600 to-blue-300 backdrop-blur rounded-md group transition">
                            <img
                                :src="'/projects/'+project.thumbnail"
                                :alt="project.name"
                                class="relative shadow-xl rounded-md overflow-hidden w-full object-cover object-top hover:object-center transition-all duration-1000 aspect-video"
                                loading="lazy"
                            >
                            <h4 class="mt-5 font-bold text-sm md:text-xl">{{ project.name }}</h4>
                            <div class="space-x-1">
                                <span v-for="category in project.categories" :key="category" class="px-2 py-1 rounded-sm bg-indigo-600 text-xs text-white leading-none group-hover:bg-neutral-800">{{ category }}</span>
                            </div>
                        </article>
                    </a>
                </li>
            </ul>
        </div>

        <svg class="fixed bottom-0 right-0 w-full opacity-30 animate-blobs" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="92" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="207" ry="91" cx="-0.4642148042227632" cy="483.12500378741913" fill="hsl(37, 99%, 67%)"></ellipse><ellipse rx="207" ry="91" cx="310.0005154634024" cy="381.37422705426985" fill="#6d28d9"></ellipse><ellipse rx="207" ry="91" cx="564.058617191487" cy="499.7024473476697" fill="#4f46e5"></ellipse><ellipse rx="207" ry="91" cx="817.9463066436153" cy="398.20286539796604" fill="#be185d"></ellipse></g></svg>
        
        <Teleport to="body">
            <ProjectModal
                :show="showModal"
                :project="SelectedProject"
                @close="showModal = false"
            />
        </Teleport>
    </section>
</template>

<script setup>
import {ref} from 'vue'
import ProjectModal from './ProjectModal.vue';

const SelectedProject = ref({})
const showModal = ref(false)

const projects = ref([
    {
        name: 'Tuzzy E-Sports',
        thumbnail: 'tuzzy.png',
        url: 'https://tuzzy.gg',
        categories: ['Institucional', 'E-Commerce']
    },
    {
        name: 'Me Too Brasil',
        thumbnail: 'metoobrasil.png',
        url: 'https://metoobrasil.org.br',
        categories: ['Institucional', 'E-Commerce']
    },
    {
        name: 'RS Despachante',
        thumbnail: 'rsdespachante.png',
        url: 'https://rsdespachante.com.br',
        categories: ['App Web', 'Institucional', 'Blog', 'Sistema interno']
    },
    {
        name: 'Moldar Interiores',
        thumbnail: 'moldarinteriores.png',
        url: 'https://moldarinteriores.com.br',
        categories: ['Portifolio']
    },
    {
        name: 'Madeibra Marcenaria & Design',
        thumbnail: 'madeibra.png',
        url: 'https://madeibra.com.br',
        categories: ['Institucional', 'Portifolio', 'E-Commerce']
    },
    {
        name: 'Incentivesp',
        thumbnail: 'incentive.png',
        url: 'https://incentive.esp.br',
        categories: ['App Web', 'Rede Social']
    },
])
</script>