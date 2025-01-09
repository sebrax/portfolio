<script setup>
  import CtaButton from './CtaButton.vue'
  import Avatar from './IntroAvatar.vue'

  const isInView = (element) => {
    const elementTop = element.offsetTop
    const elementBottom = elementTop + element.offsetHeight
    const viewportTop = window.scrollY
    const viewportBottom = viewportTop + window.innerHeight

    return elementBottom > viewportTop && elementTop < viewportBottom
  }

  window.addEventListener('scroll', () => {
    const el = avatar.value
    if (el instanceof HTMLElement && isInView(el)) {
      let position = Math.sqrt(el.getBoundingClientRect().y)
      el.style.transform = `rotate(${position++}deg)`
    }
  })
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
    <Avatar ref="avatar" class="avatar w-40 md:w-48 lg:w-auto lg:max-w-xs absolute left-0 lg:left-auto lg:right-10 -bottom-1" />
  </header>
</template>
