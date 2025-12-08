<script setup lang="ts">
// Component Props
const props = defineProps({
  property1: {
    type: String,
    default: 'Default',
    validator: (value: string) => ['Default', 'Service', 'Privacy'].includes(value),
  },
});
</script>

<template>
  <footer class="w-full bg-transparent py-6 px-4">
    <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
      <span class="font-sans text-[14px] font-normal leading-5 text-[#6d6d6dff]">
        國泰金控版權所有 2025 Copyright © Cathay Holdings All Right Reserved.
      </span>
      <span
        v-if="props.property1 !== 'Default'"
        class="font-sans text-[14px] font-normal leading-5 text-[#6d6d6dff] hidden sm:inline"
      >
        |
      </span>
      <span
        v-if="props.property1 === 'Service'"
        class="font-sans text-[14px] font-normal leading-5 text-[#6d6d6dff]"
      >
        服務條款
      </span>
      <span
        v-else-if="props.property1 === 'Privacy'"
        class="font-sans text-[14px] font-normal leading-5 text-[#6d6d6dff]"
      >
        隱私權
      </span>
    </div>
  </footer>
</template>
