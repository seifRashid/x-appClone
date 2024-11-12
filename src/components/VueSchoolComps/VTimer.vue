<script setup>
import { ref } from 'vue'

// const props = defineProps({
//   show: { type: Boolean, Required: false },
// })

const seconds = ref(0)
const minutes = ref(0)
setInterval(() => {
  seconds.value++
  if (seconds.value === 60) {
    minutes.value++
    seconds.value = 0
  }
}, 1000)

</script>
<template>
  <div class="text-green-700 text-xl font-semibold m-2">{{ minutes }} min:{{ seconds }} sec</div>
</template>
