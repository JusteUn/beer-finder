<script setup lang="ts">
import { Home, Wine, Package2, Beer, Martini, Users } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import ToggleThemeButton from '@/components/buttons/ToggleThemeButton.vue'
</script>

<template>
  <TooltipProvider>
    <nav class="flex flex-col items-center gap-4 px-2 py-4">
      <RouterLink
        to="#"
        class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
        <span class="sr-only">Happicole</span>
      </RouterLink>
      <Tooltip>
        <TooltipTrigger as-child>
          <RouterLink
            to="/"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            :class="{ 'bg-accent text-accent-foreground': $route.name == 'home' }"
          >
            <Home class="h-5 w-5" />
            <span class="sr-only">Home</span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right"> Home </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <RouterLink
            to="/beers"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            :class="{ 'bg-accent text-accent-foreground': $route.name == 'beers-list' }"
          >
            <Beer class="h-5 w-5" />
            <span class="sr-only">Beers</span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right"> Beers </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <RouterLink
            to="/wines"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            :class="{ 'bg-accent text-accent-foreground': $route.name == 'wines-list' }"
          >
            <Wine class="h-5 w-5" />
            <span class="sr-only">Wines</span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right"> Wines </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <RouterLink
            to="/spirits"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            :class="{ 'bg-accent text-accent-foreground': $route.name == 'spirits-list' }"
          >
            <Martini class="h-5 w-5" />
            <span class="sr-only">Spirits</span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right"> Spirits </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <RouterLink
            to="/users"
            class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            :class="{ 'bg-accent text-accent-foreground': $route.name == 'users-list' }"
          >
            <Users class="h-5 w-5" />
            <span class="sr-only">Users</span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right"> Users </TooltipContent>
      </Tooltip>
    </nav>
    <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
      <ToggleThemeButton />
    </nav>
  </TooltipProvider>
</template>
