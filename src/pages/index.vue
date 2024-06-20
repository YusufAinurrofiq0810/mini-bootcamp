<script setup lang="ts">
import sidebar from '@/components/sidebar/sidebar.vue'
import Card from '@/components/card/card.vue'
</script>
<template>
  <div>
    <sidebar>
      <card :balance="'50000'" :number="'12323343435'" :valid="'08-02'"> </card>

      <RouterView />
    </sidebar>
  </div>
</template>
