<template>
    <footer class="w-full py-3 px-6 bg-indigo-800 text-white text-center">
        <p class="font-light text-sm">{{ year + ' | ' + $t('site_title') }}</p>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>