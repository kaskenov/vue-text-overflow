<script
  setup
  lang="ts"
  generic="T extends Record<string, any> = Record<string, any>"
>
import { VUE_TEXT_OVERFLOW_DEFAULT_PROPS } from './VueTextOverflow.constants';
import type { VueTextOverflowProps } from './VueTextOverflow.types';

withDefaults(
  defineProps<VueTextOverflowProps<T>>(),
  VUE_TEXT_OVERFLOW_DEFAULT_PROPS,
);
</script>

<template>
  <Component
    :is="component"
    v-bind="componentProps"
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
