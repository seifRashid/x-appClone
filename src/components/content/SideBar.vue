<script setup>
import { useContent } from '@/stores/content'

const action = useContent()

const toggleSideBar = () => {
  action.toggleSideBar()
}
</script>
<template>
  <div class="absolute top-0 left-0 bg-black w-[80%] rounded-md h-screen text-white">
    <div class="p-3">
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center cursor-pointer">
          <RouterLink to="/profile"
            ><span class="size-8 bg-gray-200 border rounded-full flex items-center justify-center"
              ><img
                src="https://i.pravatar.cc/110"
                alt="profile picture"
                class="border rounded-full"
            /></span>
          </RouterLink>
        </div>
        <div class="flex items-center gap-4">
          <span @click="toggleSideBar" class="cursor-pointer">⬅</span>
          <span><i class="fa-solid fa-ellipsis text-white cursor-pointer"></i></span>
        </div>
      </div>
      <div class="flex flex-col gap-[1px] p-1">
        <p class="font-bold">Name</p>
        <p class="text-gray-500 text-sm">@UserName</p>
      </div>
      <div class="flex gap-2">
        <p class="text-sm text-gray-500">
          <span class="text-white font-semibold">35</span> Following
        </p>
        <p class="text-sm text-gray-500">
          <span class="text-white font-semibold">350</span> Followers
        </p>
      </div>
      <hr class="my-3 border-b-[0.5px] border-gray-500" />
      <div class="flex flex-col gap-5 p-2 justify-start">
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for user profile -->
          <i class="fa-regular fa-user text-white cursor-pointer"></i>
          <p class="text-white cursor-pointer">Profile</p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for Premium -->
          <p>X</p>
          <p class="text-white cursor-pointer">Premium</p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for bookmarks -->
          <i class="fa-regular fa-bookmark text-white cursor-pointer"></i>
          <p class="text-white cursor-pointer">Bookmarks</p>
        </div>
        <div class="flex items-center justify-between">
          <!-- font awesome icon for Jobs -->
          <div class="flex items-center justify-start gap-4">
            <i class="fa-solid fa-briefcase text-white cursor-pointer"></i>
            <p class="text-white cursor-pointer">Jobs</p>
          </div>
          <p
            class="bg-blue-900 text-blue-100 px-1 text-xs rounded-full flex items-center justify-center"
          >
            new
          </p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for Lists -->
          <i class="fa-solid fa-list text-white cursor-pointer"></i>
          <p class="text-white cursor-pointer">Lists</p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for microphone -->
          <i class="fa-solid fa-microphone text-white cursor-pointer"></i>
          <p class="text-white cursor-pointer">Spaces</p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <!-- font awesome icon for money -->
          <i class="fa-solid fa-money-bill text-white cursor-pointer"></i>
          <p class="text-white cursor-pointer">Monetisation</p>
        </div>
      </div>
      <hr class="my-3 border-b-[0.5px] border-gray-500" />
      <!-- Settings & Support -->
      <div class="flex items-center justify-between">
        <p class="text-white text-sm cursor-pointer">Settings & Support</p>
        <i class="fa-solid fa-angle-down text-white cursor-pointer"></i>
      </div>
      <div class="">
        <i class="fa-regular fa-moon text-white cursor-pointer mt-10"></i>
      </div>
    </div>
  </div>
</template>
