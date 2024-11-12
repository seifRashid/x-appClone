<script setup></script>
<template>
  <div class="bg-blue-500 w-full h-[150px] flex items-start p-2 rounded-t-md">
    <div class="flex items-start justify-between w-full h-full">
      <div class="flex items-center justify-center bg-black/50 p-2 size-8 rounded-full">
        <!-- font awesome arrow back icon -->
        <RouterLink to="/">
          <i class="fa-solid fa-arrow-left text-white"></i>
        </RouterLink>
      </div>
      <div class="flex gap-3">
        <div class="flex items-center justify-center bg-black/50 p-2 size-8 rounded-full">
          <!-- font awesome arrow back icon -->
          <i class="fa-solid fa-search text-white"></i>
        </div>
        <div class="flex items-center justify-center bg-black/50 p-2 size-8 rounded-full">
          <!-- font awesome arrow back icon -->
          <span><i class="fa-solid fa-ellipsis-vertical text-white cursor-pointer"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>
