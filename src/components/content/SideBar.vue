<script setup></script>
<template>
  <div class="absolute top-0 left-0 bg-black w-[80%] rounded-md h-screen text-white">
    <div class="p-3">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center cursor-pointer">
          <span class="size-8 bg-gray-200 border rounded-full flex items-center justify-center"
            ><img src="https://i.pravatar.cc/110" alt="profile picture" class="border rounded-full"
          /></span>
        </div>
        <div class="flex items-center gap-4">
          <span><i class="fa-solid fa-ellipsis text-white cursor-pointer"></i></span>
        </div>
      </div>
      <div class="flex flex-col gap-[1px] p-1">
        <p class="font-bold">Name</p>
        <p class="text-gray-500 text-sm">@UserName</p>
      </div>
      <div class="flex gap-2">
        <p class="text-sm text-gray-500"><span class="text-white font-semibold" >35</span> Following</p>
        <p class="text-sm text-gray-500"><span class="text-white font-semibold" >350</span> Followers</p>
      </div>
      <hr class="my-3 border-b-[0.5px] border-gray-500" >
    </div>
  </div>
</template>
