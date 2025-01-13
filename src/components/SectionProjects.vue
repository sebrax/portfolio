<template>
    <section class="relative">
        <div class="p-5 lg:p-10 space-y-10">
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
import ProjectModal from './ProjectModal.vue'
import { projects } from '../projects'

const SelectedProject = ref({})
const showModal = ref(false)
</script>