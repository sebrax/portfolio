<script setup>
defineProps({
  msg: String,
  url: String,
  icon: {
    type: String,
    required: false,
  },
  external: {
    type: Boolean,
    required: false,
    default: false,
  },
  filled: {
    type: Boolean,
    required: false,
    default: false,
  },
  fullwidth: {
    type: Boolean,
    required: false,
    default: false
  },
  icon: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <a
    :href="url"
    :target="external ? '_blank' : '_self'"
    :class="{ 'bg-indigo-600': filled, 'w-full': fullwidth }"
    class="block rounded-md px-6 py-3 overflow-hidden relative group cursor-pointer border-2 font-medium text-center text-lg border-indigo-600 dark:border-indigo-300"
  >
    <span
      :class="{ 'bg-indigo-800': filled }"
      class="absolute w-72 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-72 group-hover:-translate-y-32 ease"
    ></span>
    <span
      :class="{ 'text-white': filled }"
      class="relative dark:text-white transition duration-300 group-hover:text-white ease flex flex-row gap-3 group"
      >{{ msg }} <span v-if="icon" class="fill-white group-hover:animate-bounce" v-html="$icon(icon)"></span></span
    >
  </a>
</template>
