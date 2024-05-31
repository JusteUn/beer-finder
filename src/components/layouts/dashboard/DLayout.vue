<script setup lang="ts">
import DSidebar from './DSidebar.vue'
import DHeader from '@/components/layouts/dashboard/DHeader.vue'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <DSidebar />
    </aside>
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <DHeader />
      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
