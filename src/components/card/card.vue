<script lang="ts">
import { Button } from '../m'
</script>
<template>
  <div class="flex justify-center items-center">
    <div class="relative">
      <div class="w-72 h-60 p-4 bg-white border border-gray-400 my-1 mx-1 rounded-3xl">
        <div class="flex flex-col my-1 w-full">
          <div class="text-black text-sm ml-2">
            <div>Donasi 1</div>
            <div class="text-3xl">Operasi Kanker</div>
          </div>
          <div class="flex justify-end mt-4">
            <span class="text-sm font-medium text-blue-700 dark:text-black">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
          </div>
          <div class="flex flex-row mt-4">
            <div class="text-white text-sm ml-8">
              <Button class="block w-full mt-5" color="detail">Detail</Button>
            </div>
            <div class="text-white text-sm ml-8">
              <Button class="block w-full mt-5" color="delete">Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  id: string
  number: string
  valid: string
}>()
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
