<script setup>
// import data from '@/data';

// create defineProps to define props of this component
defineProps({
  authors:{type: Object},

})

// onMounted(()=>{
//   fetch('https://dummyjson.com/posts').then(async(res)=>{
//   const data = await res.json()
//   user.value = data
// })
// })

</script>
<template>
  <!-- <pre class="text-white" >{{ authors }}</pre> -->
  <div class="flex flex-col p-4 overflow-y-auto">
          <div class="flex justify-between items-center border-b-[1px] border-gray-500 py-3"  v-for="post in authors" :key="post.id">
            <div class="flex items-start gap-4">
              <!-- Profile picture -->
              <img
                :src="`https://i.pravatar.cc/${post.userId}`"
                alt="profile picture"
                class="border rounded-full size-12"
              />
              <!-- Profile name with Post -->
              <div class="flex flex-col gap-3">
                <div class="flex justify-between items-baseline">
                  <div class="flex justify-start items-baseline gap-3">
                    <p class="text-white text-xl font-bold">{{ post.id }}</p>
                    <p class="text-gray-500 text-sm">@johndoe</p>
                    <p class="text-gray-500">.6h</p>
                  </div>
                  <div class="flex justify-end">
                    <span
                      ><i class="fa-solid fa-ellipsis text-sm text-gray-500 cursor-pointer"></i
                    ></span>
                  </div>
                </div>
                <!-- Dammy Post -->
                <p class="text-white text-sm">
                  {{ post.body }}
                </p>
                <!-- Comments, retweets, likes, stats, bookmark and share icons from font awesome -->
                <div class="flex items-center gap-5 justify-between text-sm">
                  <div class="flex gap-2 text-gray-500 items-center">
                    <i class="fa-regular fa-comment text-gray-500 cursor-pointer"></i>
                    <p>{{ post.views }}</p>
                  </div>
                  <div class="flex gap-2 text-gray-500 items-center">
                    <i class="fa-regular fa-retweet text-gray-500 cursor-pointer"></i>
                    <p>102</p>
                  </div>
                  <div class="flex gap-2 text-gray-500 items-center">
                    <i class="fa-regular fa-heart text-gray-500 cursor-pointer"></i>
                    <p>{{ post.reactions.likes }}</p>
                  </div>
                  <div class="flex gap-2 text-gray-500 items-center">
                    <i class="fa-regular fa-bookmark text-gray-500 cursor-pointer"></i>
                  </div>
                  <div class="flex gap-2 text-gray-500 items-center">
                    <i class="fa-solid fa-share-nodes text-gray-500 cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
