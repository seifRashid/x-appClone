<script setup>
import { ref } from 'vue';


const props = defineProps({
  userName:{type: String}
})

const user = ref()

fetch(`https://api.github.com/users/${props.userName}`).then( async(res)=>{
  const data = await res.json()
  user.value = data
})

</script>
<template>
  <!-- <pre class="ml-[300px]" >{{ user }}</pre> -->
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
    <div class="flex flex-col items-center pb-10 pt-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="user.avatar_url" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ userName }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Followers: {{ user.followers }} Followings: {{ user.following }}</span>
        <div class="m-2"><p class="text-sm text-gray-500 dark:text-gray-400"><strong>Bio:</strong>{{ user.bio }}</p></div>
        <div class="m-2"><p class="text-sm text-gray-500 dark:text-gray-400"><strong>Twitter:</strong>{{ user.twitter_username }}</p></div>
        <div class="flex mt-4 md:mt-6">
            <a :href="user.url" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit Page</a>
            <!-- <a :href="user.repos_url" target="_blank" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View Repos</a> -->
        </div>
    </div>
</div>

</template>
