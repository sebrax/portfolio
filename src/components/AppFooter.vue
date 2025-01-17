<template>
    <footer id="contact" class="grid grid-cols-1 gap-10 relative mt-20">
        <section class="p-10 relative">
            <h2 class="text-5xl font-bold">vamos conversar?</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                <div class="dark:bg-white/10 bg-indigo-800/20 rounded-md p-10">
                    <p class="text-lg">Entre em contato comigo através do email:</p>
                    <a :href="encodedMail" class="text-lg font-bold hover:text-indigo-500 hover:underline">sulivan.braga@outlook.com</a>
                </div>
                <div class="dark:bg-white/10 bg-indigo-800/20 rounded-md p-10 lg:col-start-2 space-y-3">
                    <p class="text-lg">Ou através das redes sociais:</p>
                    <div class="flex gap-3 social-icons">
                        <a href="https://www.linkedin.com/in/sulivanbraga/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://github.com/sebrax" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <svg id="looking-avatar" class="max-w-48 lg:max-w-72 mx-auto absolute bottom-12 lg:bottom-2 right-0 left-0 lg:left-auto lg:right-10 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.55 152.09">
            <g shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <g id="head">
                    <path d="M194.03,121.22c0-10.77-8.73-19.5-19.5-19.5s-19.5,8.73-19.5,19.5c0,2.3,.42,4.49,1.15,6.54h36.7c.73-2.05,1.15-4.24,1.15-6.54Z" fill="#8f5e36"/>
                    <path d="M69.53,121.22c0-10.77-8.73-19.5-19.5-19.5s-19.5,8.73-19.5,19.5c0,2.3,.42,4.49,1.15,6.54h36.7c.73-2.05,1.15-4.24,1.15-6.54Z" fill="#8f5e36"/>
                    <path d="M175.77,78.7c0-13.93-5.53-27.29-15.38-37.14-9.85-9.85-23.21-15.38-37.14-15.38h-21.94c-28.99,0-52.5,23.49-52.52,52.48v49.1h126.98v-49.06Z" fill="#8f5e36"/>
                    <path id="nose" d="M119.06,125.76c-1.42-2.36-3.95-3.83-6.71-3.88s-5.34,1.32-6.85,3.63" fill="none" stroke="#cf946d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                    <g id="eyes">
                        <ellipse id="eye-left" cx="80.78" cy="114.61" rx="6.88" ry="7.43"/>
                        <ellipse id="eye-right" cx="143.79" cy="114.61" rx="6.88" ry="7.43"/>
                    </g>
                    <g id="eyebrows">
                        <path id="eyebrow-2" d="M132.12,85.57c15.97-8.6,28,0,28,0" fill="none" stroke="#272727" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12"/>
                        <path id="eyebrow-1" d="M97.12,85.57c-15.97-8.6-28,0-28,0" fill="none" stroke="#272727" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12"/>
                    </g>
                    <g id="hair">
                        <path id="untitled-s-path6" d="M179.6,41.57c-.05-8.48-6.91-15.34-15.39-15.39-.38,0-.76,0-1.13,.06,.23-1.01,.35-2.04,.35-3.07-.04-7.72-6.28-13.96-14-14h-12.69c-.7,0-1.41,.07-2.1,.18C133.82,3.98,129.2,0,123.77,0h-12.63C74.57,.26,45.03,29.92,44.93,66.49v16.31h0v38.38h9.43v-4.3h0v-35.21c0-4.8,3.41-8.73,7.95-8.73v-20.41c5.09-5.56,12.27-8.73,19.8-8.75h60.38c7.53,.02,14.71,3.19,19.8,8.75v20.46c4.68,.15,8.36,4.05,8.25,8.73v39.46h9.06v-36.35h0V41.57Z" fill="#272727"/>
                        <line id="untitled-s-line5" x1="96.91" y1="30.84" x2="117.96" y2="9.8" fill="none" stroke="#68717d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6"/>
                        <line id="untitled-s-line6" x1="118.63" y1="33.72" x2="127.66" y2="24.7" fill="none" stroke="#68717d" stroke-linecap="round" stroke-miterlimit="10" stroke-width="6"/>
                    </g>
                </g>
                <g id="hands">
                    <g id="fingers-left">
                        <path id="finger-inside" d="M52.27,119.94c4.35,0,7.87,.31,7.87,5s0,27.14-7.87,27.14-7.87-22.45-7.87-27.14,3.52-5,7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-2" data-name="finger-inside" d="M37.57,118.17c4.35,0,7.87,.31,7.87,5s0,27.14-7.87,27.14-7.87-22.45-7.87-27.14,3.52-5,7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-3" data-name="finger-inside" d="M22.72,118.17c4.35,0,7.87,.31,7.87,5s0,27.14-7.87,27.14-7.87-22.45-7.87-27.14,3.52-5,7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-4" data-name="finger-inside" d="M7.87,119.94c4.35,0,7.87,.31,7.87,5s0,27.14-7.87,27.14S0,129.64,0,124.94s3.52-5,7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-5" data-name="finger-inside" d="M65.01,128.94c3.18,0,5.75-.22,5.75-3.66s-2.58-6.21-5.75-6.21-5.75,2.78-5.75,6.21,2.58,3.66,5.75,3.66Z" fill="#754c24"/>
                    </g>
                    <g id="fingers-right">
                        <path id="finger-inside-6" data-name="finger-inside" d="M172.28,119.94c-4.35,0-7.87,.31-7.87,5s0,27.14,7.87,27.14,7.87-22.45,7.87-27.14-3.52-5-7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-7" data-name="finger-inside" d="M186.98,118.17c-4.35,0-7.87,.31-7.87,5s0,27.14,7.87,27.14,7.87-22.45,7.87-27.14-3.52-5-7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-8" data-name="finger-inside" d="M201.83,118.17c-4.35,0-7.87,.31-7.87,5s0,27.14,7.87,27.14,7.87-22.45,7.87-27.14-3.52-5-7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-9" data-name="finger-inside" d="M216.68,119.94c-4.35,0-7.87,.31-7.87,5s0,27.14,7.87,27.14,7.87-22.45,7.87-27.14-3.52-5-7.87-5Z" fill="#754c24"/>
                        <path id="finger-inside-10" data-name="finger-inside" d="M159.54,128.94c-3.18,0-5.75-.22-5.75-3.66s2.58-6.21,5.75-6.21,5.75,2.78,5.75,6.21-2.58,3.66-5.75,3.66Z" fill="#754c24"/>
                    </g>
                </g>
            </g>
        </svg>

        <!-- <img src="/looking.svg" class="max-w-72 mx-auto absolute bottom-2 right-10 z-10" alt="Ilustração de uma pessoa olhando para cima" /> -->

        <div class="pt-10 lg:pt-3 py-3 px-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-center relative">
            <p class="text-sm">{{ year + ' | ' + $t('site_title') }}</p>
        </div>
    </footer>
</template>

<script setup>
const encodedMail = '&#109;a&#105;l&#116;&#111;:&#115;&#117;&#108;&#105;&#118;&#97;&#110;&#46;&#98;&#114;&#97;&#103;&#97;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;'
const year = new Date().getFullYear()
</script>

<style scoped>

.social-icons svg {
    @apply fill-black dark:fill-white hover:fill-indigo-500 hover:scale-110 transition h-10;
}

@keyframes move-head {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    75% {
        transform: translateX(5px);
    }
}

#head {
    animation: move-head 5s infinite;
}

</style>