<script setup lang="ts">
import picTreeSrc from '../assets/images/picTree.png';
import svgCathaySrc from '../assets/images/svgCathay.svg';

const picTree = picTreeSrc;
const svgCathay = svgCathaySrc;
</script>

<template>
<div class="flex flex-col items-center justify-center gap-2 p-1">
  <img :src="picTree" class="flex w-[33px] h-6 object-cover" />
  <img :src="svgCathay" class="w-[84px] h-[17px] block object-contain" />
</div>
</template>
