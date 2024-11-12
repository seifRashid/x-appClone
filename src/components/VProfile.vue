<script setup>
import BarnerSection from './BarnerSection.vue';
</script>
<template>
  <div class="flex flex-col relative">
            <!-- X-profile Information -->
            <!-- Barner section -->
            <BarnerSection />
            <!-- Profile section -->
            <div class="text-white flex flex-col absolute top-[100px] w-full">
              <div class="flex justify-between items-baseline p-3">
                <span
                  class="size-16 bg-gray-200 border rounded-full flex items-center justify-center"
                >
                  <img
                    src="https://i.pravatar.cc/110"
                    alt="profile picture"
                    class="border rounded-full"
                /></span>
                <div class="bg-black border border-gray-600 rounded-full px-2">
                  <p>Edit profile</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[1px] justify-start items-start text-white mt-8 px-4">
            <div class="flex flex-col mb-1">
              <p class="font-semibold">Name</p>
              <p class="text-white/50 text-xs">@UserName</p>
            </div>
            <div class="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic culpa repellendus
              aperiam consectetur quis voluptatum! Veniam, fugit debitis placeat reiciendis quis
              iure atque at rerum nemo asperiores modi mollitia?
            </div>
            <div><p class="text-white/50 text-xs mt-2">Born 4 Apr 1985 Joined June 2014</p></div>
            <div class="flex gap-2 my-2 text-white/50">
              <p class="text-sm text-gray-500">
                <span class="text-white text-xs font-semibold">35</span> Following
              </p>
              <p class="text-sm text-gray-500">
                <span class="text-white text-xs font-semibold">350</span> Followers
              </p>
            </div>
          </div>
</template>
