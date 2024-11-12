<script setup>

import { useContent } from '@/stores/content'

const action = useContent()

const toggleSideBar=()=>{
  action.toggleSideBar()
}

</script>

<template>
  <div class="flex justify-between items-center p-4">
    <div class="flex items-center cursor-pointer">
      <span class="size-8 bg-gray-200 border rounded-full flex items-center justify-center"
        ><img src="https://i.pravatar.cc/110" alt="profile picture" class="border rounded-full" @click="toggleSideBar()"
      /></span>
    </div>
    <div class="flex items-center cursor-pointer">
      <span class="size-8 flex items-center justify-center text-white text-4xl font-semibold">
        <!-- X twitter icon from font awesome-->
        <!-- <i class="fa-brands fa-x-twitter"></i> -->
        X
      </span>
    </div>
    <div class="flex items-center gap-4">
      <p class="text-white text-sm cursor-pointer">Upgrade</p>
      <span><i class="fa-solid fa-ellipsis-vertical text-white cursor-pointer"></i></span>
    </div>
  </div>
</template>
