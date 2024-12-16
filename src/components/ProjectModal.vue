<template>
	<Transition>
		<div
			v-if="show"
			id="modal"
			class="z-50 fixed inset-0 bg-gray-600/70 overflow-y-auto w-full h-full"
			@click.self="closeModal()"
		>
			<div
				class="modal-container relative top-0 left-0 p-5 w-3/5 h-full shadow-lg rounded-r-2xl bg-white overflow-hidden"
			>
				<a
					href="#"
					class="absolute top-1 right-1 p-2"
					v-html="$icon('close')"
					@click.prevent="closeModal()"
				></a>

				<div class="grid grid-cols-4 gap-3 h-full">
					<Transition name="fade">
						<figure
							:class="{'col-span-2 overflow-hidden': toggledThumb, 'col-span-4 overflow-y-scroll max-w-3xl mx-auto': !toggledThumb}"
							class="rounded-2xl shadow-xl aspect-video cursor-pointer w-full"
							@click="toggledThumb = !toggledThumb"
						>
							<img :src="'/projects/' + project.thumbnail" :alt="project.title" class="w-full">
						</figure>
					</Transition>
					<div
						:class="{'col-span-2': toggledThumb, 'col-span-full': !toggledThumb}"
						class="py-3 flex flex-col gap"
					>
						<h3 class="text-lg lg:text-3xl leading-6 font-bold">{{ project.name }}!</h3>
						<p class="text-gray-500 space-x-1 mt-3">
							<span v-for="category in project.categories" :key="category" class="px-2 py-1 rounded-sm bg-indigo-600 text-xs text-white leading-none">{{ category }}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
import { onUpdated, inject, ref } from 'vue'

const icons = inject('icons')

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

<style>
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
