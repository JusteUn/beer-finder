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
import type Beer from '@/models/beer';

defineProps<{
  beers: Beer[]
}>()
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="hidden w-[100px] sm:table-cell">
          <span class="sr-only">img</span>
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Type</TableHead>
        <TableHead class="hidden md:table-cell"> Description </TableHead>
        <TableHead class="hidden md:table-cell"> Degrees </TableHead>
        <TableHead class="hidden md:table-cell"> Created at </TableHead>
        <TableHead>
          <span class="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="beer in beers" :key="beer.name">
        <TableCell class="hidden sm:table-cell">
          <img
            alt="Product image"
            class="aspect-square rounded-md object-cover"
            height="64"
            :src="beer.img"
            width="64"
          />
        </TableCell>
        <TableCell class="font-medium"> {{ beer.name }} </TableCell>
        <TableCell>
          <Badge variant="outline"> {{ beer.type }} </Badge>
        </TableCell>
        <TableCell class="hidden md:table-cell"> {{ beer.description }} </TableCell>
        <TableCell class="hidden md:table-cell"> {{ beer.degrees }} </TableCell>
        <TableCell class="hidden md:table-cell"> {{ beer.created_at }} </TableCell>
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
