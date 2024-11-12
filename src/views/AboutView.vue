<script setup>
import AlertBox from '@/components/VueSchoolComps/AlertBox.vue';
import ButtonComponent from '@/components/VueSchoolComps/ButtonComponent.vue'
import DarasaLangu from '@/components/VueSchoolComps/DarasaLangu.vue'
// import GitHubProfileCard from '@/components/VueSchoolComps/GitHubProfileCard.vue';
import VTimer from '@/components/VueSchoolComps/VTimer.vue';
import { ref } from 'vue'

const show = ref(true)


</script>

<template>
  <main class="flex justify-center w-screen">
    <div
      class="max-w-md bg-green-200 h-screen border rounded-xl w-[448px] flex flex-col items-center justify-start p-2 hide-scrollbars"
    >
      <ButtonComponent />
      <VTimer />
      <!-- Input checkbox to toggle the component below -->
      <label for="" class="font-semibold"
        ><input type="checkbox" v-model="show" class="m-2" /> show names</label
      >
      <DarasaLangu v-if="show" />
      <!-- <GitHubProfileCard userName="seifRashid" />
      <GitHubProfileCard userName="thecodeholic" /> -->
      <AlertBox rangi="success">Action Successfull</AlertBox>
      <AlertBox rangi="info">alert information</AlertBox>
      <AlertBox rangi="warning">be warned</AlertBox>
      <AlertBox rangi="danger">alert danger</AlertBox>
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
