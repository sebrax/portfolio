<script setup>
import { onMounted } from "vue";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function animateSVG (element, className, interval = 5000, disableTimer = 300) {
  setInterval(() => {
    const el = document.getElementById(element)
    el.classList.add(className)
    setTimeout(() => el.classList.remove(className), disableTimer)
  }, interval)
}

function followingEyes() {
  const svg = document.getElementById('avatar')
  const eyeLeft = document.getElementById('eye-left')
  const eyeRight = document.getElementById('eye-right')

  document.addEventListener('mousemove', (event) => {
    const rect = svg.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const eyeLeftX = clamp(173.18 + (x - 150) / 50, 160, 176)
    const eyeLeftY = clamp(170 + (y - 200) / 50, 157, 182)
    const eyeRightX = clamp(236.19 + (x - 150) / 50, 223, 239)
    const eyeRightY = clamp(170 + (y - 200) / 50, 157, 182)

    eyeLeft.setAttribute('transform', `translate(${eyeLeftX} ${eyeLeftY})`)
    eyeRight.setAttribute('transform', `translate(${eyeRightX} ${eyeRightY})`)
  })
}

onMounted(() => {
  followingEyes()
  animateSVG('eyes', 'blink')
  setTimeout(animateSVG('eyebrow-2', 'bounce', 10000, 2000), 5000)
})

</script>

<template>
  <svg id="avatar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
    <g id="man-5" transform="translate(-54.720001 28.040016)">
      <g id="body">
        <path id="untitled-s-path1" d="M309.51,371.959984v-38.019984c-.087883-30.742353-24.987647-55.642117-55.73-55.73h-3.52c-11.045695,0-20-8.954305-20-20v-20.09h-51.2v20.09c0,11.045695-8.954305,20-20,20h-3.52c-30.707277.115184-55.570331,24.982703-55.68,55.69v38.059984Z" fill="#8f5e36"/>
        <path id="untitled-s-path2" d="M174.2,271.21c9.296448,4.833308,19.622182,7.351278,30.1,7.34h.77c10.477724.010489,20.803273-2.507435,30.1-7.34-3.132253-3.606916-4.857915-8.222883-4.86-13v-20.09h-51.25v20.09c-.002984,4.776955-1.728531,9.392617-4.86,13Z" fill="#593415"/>
        <g id="clothing">
          <path id="untitled-s-path3" d="M145.8,357v8.67c0,1.668212.662695,3.268098,1.842298,4.447702s2.77949,1.842298,4.447702,1.842298h105.18c1.668212,0,3.268098-.662695,4.447702-1.842298s1.842298-2.77949,1.842298-4.447702v-8.67h42.94c3.865993,0,7-3.134007,7-7v-14.26c0-33-26.74-61.57-59.73-61.57c0,0-4.51,0-5-.07-1.103728-.091856-2.194457.289899-3,1.05-10.773625,10.214412-25.05395,15.908647-39.9,15.91h-1.41c-14.893039,0-29.215385-5.728938-40-16-.890127-.811754-2.098701-1.179101-3.29-1-.65.09-5.5.13-5.5.13-33,0-59.73,28.58-59.73,61.57v14.24c0,3.865993,3.134007,7,7,7Z" fill="#c1c1c1"/>
          <path id="untitled-s-path4" d="M160.25,282.09c12.11186,10.944587,27.85575,17.002671,44.18,17h1.41c16.310369.009524,32.044787-6.029842,44.16-16.95" fill="none" stroke="#202c33" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" />
          <line id="untitled-s-line1" x1="145.8" y1="339.98" x2="145.8" y2="359.56" fill="none" stroke="#202c33" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" />
          <line id="untitled-s-line2" x1="263.56" y1="339.98" x2="263.56" y2="359.56" fill="none" stroke="#202c33" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" />
          <path id="untitled-s-path5" d="M240.17,348.54l-8.92,5.05c-1.205205.688752-2.684795.688752-3.89,0l-8.92-5.05c-1.409815-.835297-2.264486-2.361495-2.24-4v-14.17c-.084423-2.400971,1.789315-4.41781,4.19-4.51h17.85c2.400685.09219,4.274423,2.109029,4.19,4.51v14.18c.016737,1.639058-.845625,3.161547-2.26,3.99Z" fill="#202c33" />
          <line id="untitled-s-line3" x1="102" y1="348.41" x2="131.6" y2="348.41" fill="none" stroke="#202c33" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" />
          <line id="untitled-s-line4" x1="307.37" y1="348.41" x2="277.77" y2="348.41" fill="none" stroke="#202c33" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" />
        </g>
      </g>
      <g id="head">
        <circle id="ear-2" r="19.5" transform="translate(266.93 181.04)" fill="#8f5e36"/>
        <circle id="ear-1" r="19.5" transform="translate(142.43 181.04)" fill="#8f5e36" />
        <path id="face" d="M193.71,86h21.94c13.92917,0,27.287838,5.533341,37.137248,15.382752s15.382752,23.208078,15.382752,37.137248v56.07c0,30.773306-24.946694,55.72-55.72,55.72h-15.54c-30.773306,0-55.72-24.946694-55.72-55.72v-56.11c.022079-28.990373,23.529619-52.480008,52.52-52.48Z" fill="#8f5e36" />
        <path id="mouth" d="M194.12,207.61c2.187309,3.714044,6.146374,6.025788,10.455912,6.10533s8.351214-2.084532,10.674088-5.71533" fill="none" stroke="#cf946d" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" />
        <path id="nose" d="M211.46,187.58c-1.419143-2.363024-3.954822-3.829029-6.710774-3.879839s-5.343945,1.320732-6.849226,3.629839" fill="none" stroke="#cf946d" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" />
        <g id="eyes">
          <ellipse id="eye-left" rx="6.88" ry="7.43" transform="translate(173.18 169)" />
          <ellipse id="eye-right" rx="6.88" ry="7.43" transform="translate(236.19 169)" />
        </g>
        <g id="eyebrows" transform="matrix(1 0 0 1.008713 0 0)">
          <line id="eyebrow-2" x1="224.52" y1="144.13" x2="252.52" y2="144.13" fill="none" stroke="#272727" stroke-width="12" stroke-linecap="round" stroke-miterlimit="10" />
          <line id="eyebrow-1" x1="161.52" y1="144.13" x2="189.52" y2="144.13" fill="none" stroke="#272727" stroke-width="12" stroke-linecap="round" stroke-miterlimit="10" />
        </g>
        <g id="hair">
          <path id="untitled-s-path6" d="M272,101.39c-.049156-8.479218-6.910782-15.340844-15.39-15.39-.38,0-.76,0-1.13.06.230316-1.00716.347707-2.036844.35-3.07-.038294-7.716069-6.283931-13.961706-14-14h-12.69c-.703539.006919-1.405545.067091-2.1.18-.815378-5.374356-5.434143-9.347259-10.87-9.35h-12.63c-36.566432.263031-66.101282,29.922783-66.21,66.49v16.31v0v38.38h9.43v-4.3v0-35.21c0-4.8,3.41-8.73,7.95-8.73v-20.41c5.085626-5.557695,12.26666-8.731132,19.8-8.75h60.38c7.53334.018868,14.714374,3.192305,19.8,8.75v20.46c4.680003.152358,8.362268,4.048864,8.25,8.73v39.46h9.06v-36.35v0Z" fill="#272727" />
          <line id="untitled-s-line5" x1="189.31" y1="90.66" x2="210.36" y2="69.62" fill="none" stroke="#68717d" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" />
          <line id="untitled-s-line6" x1="211.03" y1="93.54" x2="220.06" y2="84.52" fill="none" stroke="#68717d" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" />
        </g>
        <path id="beard" d="M262.63,152.79v32.85c-.058472,17.102082-13.273851,31.276044-30.33,32.53v-7.44c.083519-10.634988-8.435716-19.341851-19.07-19.49h-17.09c-10.634284.148149-19.153519,8.855012-19.07,19.49v7.44c-17.059971-1.254254-30.276743-15.434068-30.33-32.54v-32.84c-6.076347,7.169127-9.410951,16.262214-9.41,25.66v18.18c.098836,32.61557,26.51443,59.031164,59.13,59.13h16.46c32.596043-.126257,58.981318-26.533862,59.08-59.13v-18.18c.01213-9.392744-3.308088-18.485252-9.37-25.66Zm-65.75,50.3h15.6c4.603825.054925,8.294439,3.826062,8.25,8.43v6.75v0v5.73c-.00037,1.492172-.393544,2.957954-1.14,4.25v0c-.995899,1.456297-2.64574,2.327982-4.41,2.33h-1.43c-2.952441-.005503-5.344497-2.397559-5.35-5.35v-1.44c.016952-1.542874.702922-3.002385,1.88-4h-11.2c1.177078.997615,1.863048,2.457126,1.88,4v1.44c-.005503,2.952441-2.397559,5.344497-5.35,5.35h-1.43c-1.899012-.008751-3.650504-1.025378-4.6-2.67-.643589-1.207287-.986614-2.551947-1-3.92v-12.47c-.021307-2.219746.842148-4.356614,2.399574-5.938433s3.680617-2.478377,5.900426-2.491567Z" fill="#272727" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
@keyframes blink {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0) translateY(calc(-170px / 2));
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  10%, 90% {
    transform: translateY(-7px) rotate(-3deg);
  }
}

.blink {
  transform-origin: center;
  animation: blink;
  animation-duration: .3s;
  animation-timing-function: ease-in;
}

.bounce {
  transform-origin: center;
  animation: bounce;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}
</style>