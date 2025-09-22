<script setup lang="ts">
import { ref } from 'vue';
import {
  VueTextOverflow,
  VueTextOverflowExpandable,
  type VueTextOverflowProps,
} from '@/lib';
import { VUE_TEXT_OVERFLOW_DEFAULT_PROPS } from './components/VueTextOverflow/VueTextOverflow.constants';
import type { VueTextOverflowExpandableProps } from './components/VueTextOverflowExpandable/VueTextOverflowExpandable.types';
import { VUE_TEXT_OVERFLOW_EXPANDABLE_DEFAULT_PROPS } from './components/VueTextOverflowExpandable/VueTextOverflowExpandable.constants';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const vueTextOverflowPropsModel = ref<VueTextOverflowProps>({
  ...VUE_TEXT_OVERFLOW_DEFAULT_PROPS,
});
const vueTextOverflowExpandablePropsModel = ref<VueTextOverflowExpandableProps>(
  { ...VUE_TEXT_OVERFLOW_EXPANDABLE_DEFAULT_PROPS },
);
</script>

<template>
  <div class="vue-text-overflow-demo">
    <h1>@kaskenov/vue-text-overflow</h1>
    <div class="vue-text-overflow-demo__examples">
      <div class="vue-text-overflow-demo__examples--example">
        <h3>VueTextOverflow</h3>
        <label
          >lines
          <input
            type="number"
            min="0"
            v-model="vueTextOverflowPropsModel.lines"
        /></label>
        <label
          >component
          <input type="text" v-model="vueTextOverflowPropsModel.component"
        /></label>
        <VueTextOverflow v-bind="vueTextOverflowPropsModel">{{
          LOREM
        }}</VueTextOverflow>
      </div>
      <div class="vue-text-overflow-demo__examples--example">
        <h3>VueTextOverflowExpandable</h3>
        <label
          >lines
          <input
            type="number"
            min="0"
            v-model="vueTextOverflowExpandablePropsModel.lines"
        /></label>
        <label
          >component
          <input
            type="text"
            v-model="vueTextOverflowExpandablePropsModel.component"
        /></label>
        <label
          >hide-button
          <input
            type="checkbox"
            v-model="vueTextOverflowExpandablePropsModel.hideButton"
        /></label>
        <label
          >expand-button-label
          <input
            type="text"
            v-model="vueTextOverflowExpandablePropsModel.expandButtonLabel"
        /></label>
        <label
          >collapse-button-label
          <input
            type="text"
            v-model="vueTextOverflowExpandablePropsModel.collapseButonLabel"
        /></label>
        <VueTextOverflowExpandable
          v-bind="vueTextOverflowExpandablePropsModel"
          >{{ LOREM }}</VueTextOverflowExpandable
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vue-text-overflow-demo {
  padding: 24px;

  &__examples {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;

    &--example {
      width: 300px;
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
}
</style>
