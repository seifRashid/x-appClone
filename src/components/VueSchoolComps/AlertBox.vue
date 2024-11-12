<script setup>
import { ref } from 'vue'

const show = ref(true)
const boxColuor = ref()
const icon = ref()
const props = defineProps({
  rangi: { type: String },
  showAlert: { type: Boolean }
})



if (props.rangi === 'success') {
  boxColuor.value = 'text-green-900 bg-green-400 border border-green-500'
  icon.value = 'fa-regular fa-circle-check'
} else if (props.rangi === 'info') {
  boxColuor.value = 'text-blue-900 bg-blue-400 border border-blue-500'
  icon.value = 'fa-regular fa-circle-question'
} else if (props.rangi === 'warning') {
  boxColuor.value = 'text-yellow-900 bg-yellow-400 border border-yellow-500'
  icon.value = 'fa-solid fa-circle-exclamation'
} else if (props.rangi === 'danger') {
  boxColuor.value = 'text-red-900 bg-red-400 border border-red-500'
  icon.value = 'fa-regular fa-circle-xmark'
}


</script>
<template>
  <!-- Create an alert box -->
  <div
  v-show="show"
    class="flex items-center justify-between w-full m-3 p-2 rounded-xl shadow-md"
    :class="boxColuor"
    role="alert"
  >
    <!-- alert icon for success from fontawesome -->
    <div class="flex items-center justify-start gap-3">
      <i :class="icon"></i>
      <p class="font-semibold"><slot></slot></p>
    </div>
    <i class="fa-solid fa-xmark cursor-pointer" @click="show = false"></i>
  </div>
</template>
