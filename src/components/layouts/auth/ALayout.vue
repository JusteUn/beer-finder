<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <RouterView />
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="https://www.wineenthusiast.com/wp-content/uploads/2023/09/08_23_Apero_GettyImages-1333075831_1920x1280.jpg"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
