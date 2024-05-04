<template>
  <div class="flex justify-center items-center h-screen">
    <div class="relative">
      <div class="w-64 h-40 p-4 bg-gradient-to-b from-[#9C2CF3] to-[#3A49F9] my-1 mx-1 rounded-3xl">
        <div class="text-white text-sm absolute top-0 left-0 ml-6 mt-6">
          <div>Current Balance</div>
          <div class="text-3xl">$ {{ balance }}</div>
          
        </div>
        <img src="../../assets/svg/mastercard.svg" alt="" class="absolute top-0 right-0 mr-6 mt-6">
        <div class="text-white text-sm absolute bottom-0 left-0 ml-8 mb-8">{{ number }}</div>
        <div class="text-white text-sm absolute bottom-0 right-0 mr-8 mb-8">{{ valid }}</div>
        </div>
      </div>
  </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    balance:string
    number:string
    valid:string
  }>()
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  