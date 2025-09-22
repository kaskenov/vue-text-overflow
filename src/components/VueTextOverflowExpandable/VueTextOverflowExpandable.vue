<script setup lang="ts">
import { VueTextOverflow } from '@/components/VueTextOverflow';
import type {
  VueTextOverflowExpandableProps,
  VueTextOverflowExpandableEmits,
} from './VueTextOverflowExpandable.types';
import { VUE_TEXT_OVERFLOW_EXPANDABLE_DEFAULT_PROPS } from './VueTextOverflowExpandable.constants';
import {
  computed,
  nextTick,
  ref,
  watch,
  onMounted,
  type ComponentPublicInstance,
} from 'vue';

const props = withDefaults(
  defineProps<VueTextOverflowExpandableProps>(),
  VUE_TEXT_OVERFLOW_EXPANDABLE_DEFAULT_PROPS,
);
const emit = defineEmits<VueTextOverflowExpandableEmits>();

const container = ref<ComponentPublicInstance | null>(null);
const ellipsisActive = ref<boolean>(false);
const expanded = ref<boolean>(!!props.modelValue);

const showButton = computed(() => !props.hideButton && ellipsisActive.value);

const linesNumber = computed(() => (expanded.value ? 0 : props.lines));

const checkContainer = () => {
  if (!container.value) return;

  const { scrollWidth, clientWidth, scrollHeight, clientHeight } =
    container.value.$el;

  ellipsisActive.value =
    props.lines === 1 ? scrollWidth > clientWidth : scrollHeight > clientHeight;
};

const expand = (value?: boolean) => {
  expanded.value = value ?? !expanded.value;
  emit('update:modelValue', expanded.value);
};

const handleExpandButtonClick = () => {
  expand();
};

watch(
  () => [props.lines, props.hideButton],
  async () => {
    expand(false);
    await nextTick();
    checkContainer();
  },
  { immediate: true },
);

onMounted(async () => {
  await nextTick();
  checkContainer();
});
</script>

<template>
  <div class="vue-text-overflow-expandable">
    <VueTextOverflow ref="container" :lines="linesNumber" :tagname="tagname">
      <slot />
    </VueTextOverflow>
    <slot v-if="showButton" name="activator" :onClick="handleExpandButtonClick">
      <button
        class="vue-text-overflow-expandable__expand-button"
        @click="handleExpandButtonClick"
      >
        <strong
          ><u>{{
            expanded ? collapseButonLabel : expandButtonLabel
          }}</u></strong
        >
      </button>
    </slot>
  </div>
</template>

<style lang="scss" src="./VueTextOverflowExpandable.scss"></style>
