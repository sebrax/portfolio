<script setup>
import {reactive, onMounted, ref, inject} from 'vue'

const icons = inject('icons')

const languages = ref({
	'pt-BR': { nativeName: 'Português Brasileiro', icon: icons.fl_br },
	en: { nativeName: 'English', icon: icons.fl_usa },
})

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

onMounted(() => {
  if (defaultTheme) document.body.classList.add("dark");
});
const dark = reactive({ status: defaultTheme || false });

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  dark.status = !dark.status;
}


/* document.addEventListener('scroll', () => {
  const navbar = document.getElementById('appnav')
  if(window.scrollY > 150) {
    navbar.classList.add('bg-neutral-800/70')
  } else {
    navbar.classList.remove('bg-neutral-800/70')
  }
}) */

</script>

<template>
    <nav id="appnav" class="z-20 lg:fixed top-0 right-0 p-3 md:p-6 flex justify-end gap-5 md:gap-10 w-full h-8 md:h-auto transition-all duration-700 backdrop-blur-md">
      <div v-if="languages" class="inline-flex gap-x-2">
        <span v-for="lng in Object.keys(languages)" :key="lng">
            <TransitionGroup name="fade" tag="a">
                <a href="#" class="block w-7 saturate-0 transition" :title="languages[lng].nativeName" v-if="$i18next.resolvedLanguage !== lng" @click.prevent="$i18next.changeLanguage(lng)" v-html="languages[lng].icon"></a>
                <a href="#" class="block w-7 pointer-events-none saturate-100 transition" :title="languages[lng].nativeName" v-if="$i18next.resolvedLanguage === lng" v-html="languages[lng].icon"></a>
            </TransitionGroup>
        </span>
      </div>

      <Transition name="fade">
        <a
          v-if="dark.status === false"
          href="#"
          @click.prevent="toggleDarkMode()"
          class="rounded-full"
          v-cloak
          v-html="$icon('dark')"
          ></a>
        </Transition>
        <Transition name="fade">
          <a
          v-if="dark.status === true"
          href="#"
          @click.prevent="toggleDarkMode()"
          class="rounded-full transition-all fill-white"
          v-cloak
          v-html="$icon('light')"
        ></a>
      </Transition>
    </nav>
</template>