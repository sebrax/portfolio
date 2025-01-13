<script setup>
  import { onMounted, ref, inject } from 'vue'
  import { darkMode } from '../store';

  const icons = inject('icons')

  const languages = ref({
    'pt-BR': { nativeName: 'Português Brasileiro', icon: icons.fl_br },
    en: { nativeName: 'English', icon: icons.fl_usa },
    fr: { nativeName: 'Français', icon: icons.fl_fr },
  })

  onMounted(() => {
    if (darkMode.status) document.body.classList.add('dark')
  })
</script>

<template>
  <nav
    id="appnav"
    class="z-20 absolute top-0 left-0 p-3 md:p-6 flex justify-end gap-5 md:gap-10 w-full h-8 md:h-auto">
    <div v-if="languages" class="inline-flex gap-x-2">
      <span v-for="lng in Object.keys(languages)" :key="lng">
        <TransitionGroup name="fade" tag="a">
          <a
            href="#"
            class="block w-7 saturate-0 transition"
            :title="languages[lng].nativeName"
            v-if="$i18next.resolvedLanguage !== lng"
            @click.prevent="$i18next.changeLanguage(lng)"
            v-html="languages[lng].icon"></a>
          <a
            href="#"
            class="block w-7 pointer-events-none saturate-100 transition"
            :title="languages[lng].nativeName"
            v-if="$i18next.resolvedLanguage === lng"
            v-html="languages[lng].icon"></a>
        </TransitionGroup>
      </span>
    </div>

    <Transition name="fade">
      <a
        v-if="!darkMode.status"
        href="#"
        @click.prevent="darkMode.toggle"
        class="rounded-full"
        v-cloak
        v-html="$icon('dark')"></a>
    </Transition>
    <Transition name="fade">
      <a
        v-if="darkMode.status"
        href="#"
        @click.prevent="darkMode.toggle"
        class="rounded-full transition-all fill-white"
        v-cloak
        v-html="$icon('light')"></a>
    </Transition>
  </nav>
</template>
