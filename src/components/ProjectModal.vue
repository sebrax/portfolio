<template>
	<Transition>
		<div
			v-if="show"
			id="modal"
			class="z-50 fixed inset-0 bg-gray-600/70 w-full h-full"
			@click.self="closeModal()"
		>
			<div
				class="modal-container relative top-0 left-0 p-10 w-3/5 h-full shadow-lg rounded-r-2xl bg-white overflow-y-auto"
			>
				<a
					href="#"
					class="absolute top-1 right-1 p-2"
					v-html="$icon('close')"
					@click.prevent="closeModal()"
				></a>

				<div :class="{'grid grid-cols-4': !toggledThumb}" class="gap-3">
					<Transition name="fade">
						<figure
							ref="thumb"
							:class="toggledThumb ? 'inline-block float-start overflow-hidden max-w-72 mr-10 mb-5': 'col-span-4 overflow-y-scroll max-w-3xl mx-auto block w-full'"
							class="rounded-2xl shadow-xl aspect-video cursor-pointer"
							@click="toggledThumb = !toggledThumb"
						>
							<img :src="'/projects/' + project.thumbnail" :alt="project.title" class="w-full">
						</figure>
					</Transition>
					<div
						:class="toggledThumb ? 'inline': 'col-span-full flex'"
						class="py-3 flex-col gap"
					>
						<h3 class="text-lg lg:text-3xl leading-6 font-bold">{{ project.name }}!</h3>
						<p class="text-gray-500 space-x-1 mt-3">
							<span v-for="category in project.categories" :key="category" class="px-2 py-1 rounded-sm bg-indigo-600 text-xs text-white leading-none">{{ category }}</span>
						</p>
						<article
							class="text-base leading-normal space-y-5"
							v-html="$t(project.slug, { ns: 'projects' })"
						></article>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
import { onUpdated, ref } from 'vue'

const props = defineProps({
	project: Object,
	show: Boolean
})

let toggledThumb = ref(false)

const emit = defineEmits(['close'])

function closeModal() {
	document.body.classList.remove('overflow-hidden')
	emit('close')
}

onUpdated(() => {
	if(props.show) {
		document.body.classList.add('overflow-hidden')
	}
})

document.body.addEventListener('keydown', e => {
	if(e.key === 'Escape') closeModal()
})

</script>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
