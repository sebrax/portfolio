<script setup></script>

<template>
  <section class="max-w-5xl mx-auto space-y-10 py-20">
    <h2 class="text-5xl font-bold">{{ $t('about_title') }}</h2>
    <article class="text-xl space-y-5" v-html="$t('about_description')"></article>
  </section>
</template>
