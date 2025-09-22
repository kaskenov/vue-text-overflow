import type { Component } from "vue";

export interface VueTextOverflowProps<T extends Record<string, any> = Record<string, any>> {
  lines?: number;
  component?: string | Component;
  componentProps?: T;
}
