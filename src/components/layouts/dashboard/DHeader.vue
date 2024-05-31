<script setup lang="ts">
import {
  Home,
  Wine,
  Package2,
  Settings,
  Beer,
  Martini,
  Users,
  PanelLeft,
  Search
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log(route)
})
</script>

<template>
  <header
    class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
  >
    <Sheet>
      <SheetTrigger as-child>
        <Button size="icon" variant="outline" class="sm:hidden">
          <PanelLeft class="h-5 w-5" />
          <span class="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="sm:max-w-xs">
        <nav class="grid gap-6 text-lg font-medium">
          <RouterLink
            to="#"
            class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
            <span class="sr-only">Happicole</span>
          </RouterLink>
          <RouterLink
            to="/"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            :class="{ 'font-bold': $route.name == 'home' }"
          >
            <Home class="h-5 w-5" />
            Home
          </RouterLink>
          <RouterLink
            to="/beers"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            :class="{ 'font-bold': $route.name == 'beers-list' }"
          >
            <Beer class="h-5 w-5" />
            Beers
          </RouterLink>
          <RouterLink
            to="/wines"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            :class="{ 'font-bold': $route.name == 'wines-list' }"
          >
            <Wine class="h-5 w-5" />
            Wines
          </RouterLink>
          <RouterLink
            to="/spirits"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            :class="{ 'font-bold': $route.name == 'spirits-list' }"
          >
            <Martini class="h-5 w-5" />
            Spirits
          </RouterLink>
          <RouterLink
            to="/users"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            :class="{ 'font-bold': $route.name == 'users-list' }"
          >
            <Users class="h-5 w-5" />
            Users
          </RouterLink>
          <RouterLink
            to="#"
            class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Settings class="h-5 w-5" />
            Settings
          </RouterLink>
        </nav>
      </SheetContent>
    </Sheet>
    <Breadcrumb class="hidden md:flex">
      <BreadcrumbList>
        <template v-for="route in $route.matched" :key="route.name">
          <BreadcrumbItem>
            <BreadcrumbLink as-child v-if="$route.name != route.name">
              <RouterLink :to="route.path || '/'">{{ route.meta.displayName }}</RouterLink>
            </BreadcrumbLink>
            <BreadcrumbPage v-else>{{ route.meta.displayName }}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator class="mt-1" v-if="$route.name != route.name" />
        </template>
      </BreadcrumbList>
    </Breadcrumb>
    <div class="relative ml-auto flex-1 md:grow-0">
      <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
      />
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <Avatar>
            <AvatarImage
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais"
              alt="@radix-vue"
            />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
