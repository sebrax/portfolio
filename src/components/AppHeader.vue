<script setup>
  import CtaButton from './CtaButton.vue'

  /* window.addEventListener('scroll', e => {
	const avatar = document.getElementById('avatar')
	const currentPosition = avatar.getBoundingClientRect().x
}) */
</script>

<template>
  <header class="relative h-screen md:grid grid-cols-4 bg-cover md:px-10">
    <div class="col-span-3 flex flex-col justify-center gap-16 p-10">
      <span>
        <p class="text-xl lg:text-3xl font-thin">{{ $t('welcome') }}</p>
        <h1 class="text-4xl lg:text-7xl font-bold">Sulivan!</h1>
      </span>
      <p
        class="text-2xl lg:text-4xl font-thin dark:text-gray-300"
        v-html="$t('description')"></p>

      <div class="flex flex-col md:flex-row gap-3">
        <CtaButton :msg="$t('cta1')" :filled="true" />
        <CtaButton :msg="$t('cta2')" :external="true" />
      </div>
    </div>
    <img
      id="avatar"
      class="w-40 md:w-48 lg:w-auto lg:max-w-xs absolute left-0 lg:left-auto lg:right-10 -bottom-1"
      src="/eu2.webp"
      alt="Avatar Sulivan" />
  </header>
</template>

<style scoped>
  @keyframes avatarAnimate {
    from {
      transform: translate(0px) scale(.9);
    }
    to {
      transform: translate(-10%) rotateZ(30deg) scale(1.2);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: scroll()) {
      #avatar {
        animation: avatarAnimate linear both;
        animation-timeline: view();
        animation-range: contain;
      }
    }
  }
</style>
