<script setup lang="ts">
// Component Props
const props = defineProps({
  property1: {
    type: String,
    default: 'Default',
    validator: (value: string) => ['Default', '服務條款', '隱私權'].includes(value),
  },
});
</script>

<template>
  <div class="flex flex-row items-center justify-center p-[24px_0_24px_0]">
    <span class="font-sans text-[14px] font-normal text-center leading-[20px] text-[#6d6d6dff]">
      國泰金控版權所有 2025 Copyright © Cathay Holdings All Right Reserved.
    </span>
    <span
      v-if="props.property1 !== 'Default'"
      class="font-sans text-[14px] font-normal text-center leading-[20px] text-[#6d6d6dff] mx-2"
    >
      |
    </span>
    <span
      v-if="props.property1 === '服務條款'"
      class="font-sans text-[14px] font-normal text-center leading-[20px] text-[#6d6d6dff]"
    >
      服務條款
    </span>
    <span
      v-else-if="props.property1 === '隱私權'"
      class="font-sans text-[14px] font-normal text-center leading-[20px] text-[#6d6d6dff]"
    >
      隱私權
    </span>
  </div>
</template>
