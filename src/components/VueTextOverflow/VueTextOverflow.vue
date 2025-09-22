<script setup lang="ts">
import { VUE_TEXT_OVERFLOW_DEFAULT_PROPS } from './VueTextOverflow.constants';
import type { VueTextOverflowProps } from './VueTextOverflow.types';

withDefaults(
  defineProps<VueTextOverflowProps>(),
  VUE_TEXT_OVERFLOW_DEFAULT_PROPS,
);
</script>

<template>
  <Component
    :is="tagname"
    ref="container"
    class="vue-text-overflow"
    :class="{
      'vue-text-overflow__clamp': lines > 1,
      'vue-text-overflow__no-ellipsis': lines === 0,
    }"
    :style="{ '--lines': lines }"
  >
    <slot />
  </Component>
</template>

<style lang="scss" src="./VueTextOverflow.scss"></style>
