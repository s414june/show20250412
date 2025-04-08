<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
const common = useCommonStore()
</script>

<template>
  <main>
    <article v-for="(item, key) in common.menuItems" :key="key" :id="item.hash" class="pt-12">
      <div class="pt-10 mb-16 max-w-[600px] mx-auto px-6">
        <h3 class="text-2xl mb-6">{{ item.label }}</h3>
        <div class="space-y-6">
          <div v-html="item.content"></div>
        </div>
      </div>
    </article>
  </main>
</template>
