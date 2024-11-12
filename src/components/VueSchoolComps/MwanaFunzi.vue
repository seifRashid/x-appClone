<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  age: { type: Number, required: false },
})

const selected = ref(false)

const emit = defineEmits(['selected'])
function selectedPlan() {
  selected.value = !selected.value
  emit('selected', props.name)
}

</script>
<template>
  <div
    @click="selectedPlan"
    class="bg-white rounded-md text-green-700 p-2 m-3 shadow shadow-sm cursor-pointer"
  >
    {{ name }}: <strong>{{ age }}</strong>
  </div>
</template>
