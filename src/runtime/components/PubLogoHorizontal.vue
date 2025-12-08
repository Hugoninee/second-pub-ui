<script setup lang="ts">
import picTreeSrc from '../assets/images/picTree.png';
import svgCathaySrc from '../assets/images/svgCathay.svg';

const picTree = picTreeSrc;
const svgCathay = svgCathaySrc;
</script>

<template>
<div class="flex items-center gap-3">
  <img :src="picTree" class="h-7 object-cover" alt="Main logo" />
  <img :src="svgCathay" class="w-[84px] h-[17px] object-contain" alt="Secondary logo" />
</div>
</template>
