<script setup lang="ts">
import { ref } from 'vue';
import type { BreadcrumbItem } from '@nuxt/ui';

const breadcrumbItems = ref<BreadcrumbItem[]>([
  {
    label: '權限管理',
  },
  {
    label: 'Label',
  },
  {
    label: '用戶管理',
  },
]);

const switchValue = ref(false);
</script>

<template>
  <div class="flex flex-row justify-between gap-[898px] p-[28px_0_0_0]">
    <div class="flex flex-col gap-[8px]">
      <UBreadcrumb separatorIcon="i-lucide-chevron-right" :items="breadcrumbItems"> </UBreadcrumb>
      <span class="font-sans text-[32px] font-bold text-left leading-[44px] text-[#2c2c2cff]">
        用戶管理
      </span>
    </div>
    <div class="flex flex-row items-center gap-[8px]">
      <UChip position="bottom-left" color="primary" size="3xl" text="租戶" inset>
        <UAvatar
          size="3xl"
          alt="Avatar image"
          src="https://s3-alpha-sig.figma.com/img/f5cc/8f6a/56eec51c9197ff8f116df65e280d6d20?Expires=1765756800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r0T1bZo78Tta73GNq5rX8uiAeD6kpy4~oEX~vDVojoJnmfwu3gnKcbNEzVHWs6JTiq21QLDJLIrGlu021d-wKw1LKmT9URj8cGrkGbbFVBgx8B8TDnj0ddrWPssxQfQfygqnfkTCALFDwnzQVfPdevTMf2aCdEQDl7AvYhcYHUyT1QPZ6AKn0Hi-4nga5PCm5OO9XeeIzeiXWkuN30mUWKp0yxbyIbePsKQjxJLcOM8X1Z97pTHCUVDPMZQh3HrpeVNoBJsLnxwiHjZ6eioqMJt2TO2m0Vs5r1ukM3axHUJYC1OF8PQCsvpVX3TjQSL4rm4E6fPBMkXenwvvOHmRhA__"
        >
        </UAvatar>
      </UChip>
      <div class="flex flex-col justify-center">
        <span class="font-sans text-[14px] font-bold text-left leading-[20px] text-[#2c2c2cff]">
          林建名
        </span>
        <div class="flex flex-row items-center justify-center gap-[10px]">
          <USwitch color="primary" size="xs" label="前台" v-model="switchValue"> </USwitch>
        </div>
      </div>
    </div>
  </div>
</template>
