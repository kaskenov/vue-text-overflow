import type { VueTextOverflowProps } from '@/components/VueTextOverflow';

export type VueTextOverflowExpandableProps<T extends Record<string, any> = Record<string, any>> = VueTextOverflowProps<T> & {
  modelValue?: boolean;
  expandButtonLabel?: string;
  collapseButonLabel?: string;
  hideButton?: boolean;
};

export type VueTextOverflowExpandableEmits = (
  event: 'update:modelValue',
  value: boolean,
) => void;
