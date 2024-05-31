<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { MoreHorizontal } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import type User from '@/models/user'

defineProps<{
  users: User[]
}>()
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="hidden w-[100px] sm:table-cell">
          <span class="sr-only">img</span>
        </TableHead>
        <TableHead>Username</TableHead>
        <TableHead>Name</TableHead>
        <TableHead class="hidden md:table-cell"> Email </TableHead>
        <TableHead>Role</TableHead>
        <TableHead class="hidden md:table-cell"> Created at </TableHead>
        <TableHead>
          <span class="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.username">
        <TableCell class="hidden sm:table-cell">
          <Avatar>
            <AvatarImage
              :src="user.img"
              alt="@radix-vue"
            />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
        </TableCell>
        <TableCell class="font-medium"> {{ user.username }} </TableCell>
        <TableCell class="font-medium"> {{ user.firstname }} {{ user.lastname }} </TableCell>
        <TableCell class="hidden md:table-cell"> {{ user.email }} </TableCell>
        <TableCell>
          <Badge variant="outline"> {{ user.role }} </Badge>
        </TableCell>
        <TableCell class="hidden md:table-cell"> {{ user.created_at }} </TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal class="h-4 w-4" />
                <span class="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
