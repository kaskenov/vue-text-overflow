import type { Component } from 'vue';

export interface VueTextOverflowProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any> = Record<string, any>,
> {
  lines?: number;
  component?: string | Component;
  componentProps?: T;
}
