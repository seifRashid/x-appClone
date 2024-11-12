<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-screen">
  <header>
    <div class="flex justify-between items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />

      <div class="flex justify-between">
        <nav>
          <div class="flex gap-3">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </div>
        </nav>
      </div>
      <div class=""></div>
    </div>
  </header>

  <RouterView />
</div>
</template>

<style></style>
