<script setup>
// import MainContent from '@/components/content/MainContent.vue'
import MainContent from '@/components/content/MainContent.vue'
import NavOptionsProfile from '@/components/NavOptionsProfile.vue'
import Vprofile from '@/components/Vprofile.vue';
import { useContent } from '@/stores/content'
// import { ref } from 'vue'

const content = useContent()

content.fetchData() // Fetch data when the component mounts
</script>

<template>
  <!-- X side bar -->
  <!-- <pre class="text-black">{{ content.data.posts[0] }}</pre> -->
  <main class="flex justify-center w-screen">
    <div class="relative max-w-md bg-black h-100vh border rounded-xl">
      <div class="flex flex-col justify-between w-[448px] h-screen hide-scrollbars">
        <div class="flex flex-col">
          <Vprofile/>
          <!-- X-Navigation bar Options -->
          <NavOptionsProfile />
          <!-- Main content -->
          <div class="h-[430px] text-white">
            <MainContent :authors="content.data.posts" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hide-scrollbars {
  overflow: hidden; /* Hide overflow scrollbars completely */
  overflow-y: scroll; /* Enable vertical scrolling without showing scrollbar */
  overflow-x: scroll; /* Enable horizontal scrolling without showing scrollbar */

  /* Hide scrollbar for Chrome, Safari, and Opera */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

/* Hide scrollbar for WebKit browsers */
.hide-scrollbars::-webkit-scrollbar {
  display: none;
}
</style>
