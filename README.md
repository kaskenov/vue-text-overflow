# @kaskenov/vue-text-overflow
Responsive text clamping components for Vue 3 — with optional expand/collapse toggle.

Easily clamp overflowing text to a specified number of lines, with built-in support for “Show more / Show less” functionality. Perfect for cards, modals, tooltips, and anywhere you need text truncation.

[![Vue 3](https://img.shields.io/badge/Vue-3-%234FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue)](https://www.typescriptlang.org/)
[![PNPM](https://img.shields.io/badge/pnpm-✔-f69220.svg?logo=pnpm)](https://pnpm.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Demo

[Github Pages](https://kaskenov.github.io/vue-text-overflow/)

## Usage

```
pnpm add @kaskenov/vue-text-overflow
```

```vue
<script setup lang="ts">
import { VueTextOverflow } from '@kaskenov/vue-text-overflow';
import '@kaskenov/vue-text-overflow/styles.css';
</script>

<template>
<VueTextOverflow>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum.
</VueTextOverflow>
</template>
```

## VueTextOverflow
generic=T extends Record<string, any> = Record<string, any>
### Props
|prop|description|type|default|
|---|---|---|---|
|lines|Number of lines to clamp to|number|1|
|component|HTML tag or Vue component to render|string \| Component|'p'|
|componentProps|Props to pass to the component|T|{}|

### Slots
|name|description|props|
|---|---|---|
|default|Main content to be clamped|  |

## VueTextOverflowExpandable
generic=T extends Record<string, any> = Record<string, any>
### Props
|prop|description|type|default|
|---|---|---|---|
|lines|Number of lines to clamp to|number|1|
|component|HTML tag or Vue component to render|string \| Component|'p'|
|componentProps|Props to pass to the component|T|{}|
|modelValue|Controls expanded state|boolean|false|
|expandButtonLabel|Label for “expand” button|string|'Show more'|
|collapseButonLabel|Label for “collapse” button|string|'Show less'|
|hideButton|Hide toggle button |boolean|false|

### Emits

|event|description|payload|
|---|---|---|
|update:modelValue|Emitted when expanded state changes|boolean|

### Slots
|name|description|props|
|---|---|---|
|default|Main content to be clamped|  |
|activator|Customize the toggle button|{ onClick: Function }|
