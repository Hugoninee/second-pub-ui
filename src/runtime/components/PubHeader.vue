<script setup lang="ts">
import { ref } from 'vue'
import type { BreadcrumbItem } from '@nuxt/ui'

import picAvatarSrc from '../assets/images/picAvatar.jpg'

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
])

const switchValue = ref(false)
const picAvatar = picAvatarSrc
</script>

<template>
  <header class="w-full flex flex-row items-center justify-between pt-7 px-12 gap-8">
    <div class="flex flex-col gap-2 min-w-0 grow">
      <UBreadcrumb
        separator-icon="i-lucide-chevron-right"
        :items="breadcrumbItems"
      />
      <span class="font-sans text-[32px] font-bold leading-11 text-[#2c2c2cff] truncate">
        用戶管理
      </span>
    </div>
    <div class="flex flex-row items-center gap-3 lg:shrink-0">
      <UChip
        position="bottom-left"
        color="primary"
        size="3xl"
        text="租戶"
        inset
      >
        <UAvatar
          size="3xl"
          alt="Avatar image"
          :src="picAvatar"
        />
      </UChip>
      <div class="flex flex-col justify-center text-right">
        <span class="font-sans text-[14px] font-bold leading-5 text-[#2c2c2cff]">
          林建名
        </span>
        <div class="flex flex-row items-center justify-end gap-2.5">
          <USwitch
            v-model="switchValue"
            color="primary"
            size="xs"
            label="前台"
          />
        </div>
      </div>
    </div>
  </header>
</template>
