<script setup>
  import { ref } from 'vue'

  const icons = ref([
    'devicon-html5-plain-wordmark',
    'devicon-javascript-plain',
    'devicon-php-plain',
    'devicon-laravel-original-wordmark',
    'devicon-vuejs-plain-wordmark',
    'devicon-nuxtjs-plain-wordmark',
    'devicon-typescript-plain',
    'devicon-nodejs-plain-wordmark',
    'devicon-electron-original-wordmark',
    'devicon-css3-plain',
    'devicon-sass-original',
    'devicon-tailwindcss-original',
    'devicon-mysql-plain-wordmark',
    'devicon-mongodb-plain-wordmark',
    'devicon-wordpress-plain-wordmark',
    'devicon-woocommerce-plain-wordmark',
    'devicon-figma-plain',
    'devicon-docker-plain-wordmark',
  ])

  const iconSets = {
    left: [...icons.value.slice(0, icons.value.length / 2)],
    right: [...icons.value.slice(icons.value.length / 2)]
  }

</script>

<template>
  <section>
    <div class="p-5 lg:p-10 space-y-10">
      <h2 class="text-5xl font-bold">{{ $t('skills') }}</h2>
      <p class="pb-20 text-2xl">{{ $t('skills_description') }}</p>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="techs grid grid-cols-3 gap-10">
          <i
            v-for="icon in iconSets.left"
            :class="icon"
            class="tech-icon odd:border"></i>
        </div>
        <img
          src="/meditando.webp"
          alt="Avatar Sulivan"
          class="avatar-meditation" />
        <div class="techs grid grid-cols-3 gap-10">
          <i
            v-for="icon in iconSets.right"
            :class="icon"
            class="tech-icon even:border"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(-3deg);
    }
    50% {
      transform: translateY(-20px) rotate(3deg);
    }
    100% {
      transform: translateY(0px) rotate(-3deg);
    }
  }

  .tech-icon {
    @apply text-8xl origin-center text-center align-middle flex justify-center items-center rounded-lg border-neutral-700;
  }

  .tech-icon:hover {
    @apply transition ease-out bg-indigo-700 text-white;
  }

  .avatar-meditation {
    animation-name: float;
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
</style>
