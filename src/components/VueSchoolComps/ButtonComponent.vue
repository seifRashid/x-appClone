<script setup>
import { ref } from 'vue'

const count=ref(0)

function minusCount(){
  if(this.count === 0){
    return this.count = 0
  } else{
    this.count--
  }
}

</script>
<template>
  <button @click="minusCount()" class="text-xl text-green-700 border border-green-700 bg-green-300 mx-3 px-2 py-1 rounded-md" >minus one</button>
  <button @click="count++" class="text-xl text-green-700" >{{ count }}</button>
  <button @click="count = 0" class="text-xl text-green-700 border border-green-700 bg-green-300 mx-3 px-2 py-1 rounded-md" >restart</button>
</template>
