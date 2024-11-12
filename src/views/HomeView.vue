<script setup>
// import MainContent from '@/components/content/MainContent.vue'
import MainContent from '@/components/content/MainContent.vue'
import SideBar from '@/components/content/SideBar.vue'
import FooterNav from '@/components/FooterNav.vue'
import NavBar from '@/components/NavBar.vue'
import NavOptions from '@/components/NavOptions.vue'
import { useContent } from '@/stores/content'
import { ref } from 'vue'

const content = useContent()

const showSideBar = ref(false)

content.fetchData() // Fetch data when the component mounts
</script>

<template>
  <!-- X side bar -->
  <!-- <pre class="text-black">{{ content.data.posts[0] }}</pre> -->
  <main class="flex justify-center w-screen">
    <div class="relative max-w-md bg-black h-100vh border rounded-xl">
      <SideBar v-show="showSideBar"/>
      <div class="flex flex-col justify-between w-[448px] h-screen">
        <div class="flex flex-col">
          <!-- X-Navigation bar -->
          <NavBar />
          <!-- X-Navigation bar Options -->
          <NavOptions />
          <!-- Main content -->
          <div class="h-[430px] hide-scrollbars text-white">
            <MainContent :authors="content.data.posts" />
          </div>
        </div>
        <!-- Create a footer nav for the X app -->
        <FooterNav />
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
