<script setup>
import MwanaFunzi from './MwanaFunzi.vue'
import { ref } from 'vue'


const wanafunzi = ref([
  { id: 1, name: 'Rashid Seif', age: 25 },
  { id: 1, name: 'Muzahir Nyawa', age: 12 },
  { id: 1, name: 'Amina Munga', age: 13 },
  { id: 1, name: 'Abu Randu', age: 14 },
  { id: 1, name: 'Abudi Munga', age: 16 },
])

const selectedName = ref()

function selectedPlan(name) {
  selectedName.value = name
}

// onUnmounted(()=>{
//   return alert('I am unmounted')
// })

</script>
<template>
  <div class="bg-gray-100 rounded-md m-2 w-[400px] h-auto">

    <div class="">
      <button
        class="py-2 px-3 border border-green-200 bg-white rounded-full shadow-md mt-2 ml-2 text-green-400 font-semibold"
      >
        {{ selectedName }} <span class="text-green-600">Selected</span>
      </button>
      <MwanaFunzi
        @selected="selectedPlan($event)"
        v-for="mwanafunzi in wanafunzi"
        :key="mwanafunzi.id"
        :name="mwanafunzi.name"
        :age="mwanafunzi.age"
        :class="{ 'ring ring-green-200 shadow-md': selectedName === mwanafunzi.name }"
      />
    </div>
  </div>
</template>
