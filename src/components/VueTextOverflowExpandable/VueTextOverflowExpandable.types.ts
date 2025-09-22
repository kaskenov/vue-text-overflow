import type { VueTextOverflowProps } from '@/components/VueTextOverflow';

export type VueTextOverflowExpandableProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Record<string, any> = Record<string, any>,
> = VueTextOverflowProps<T> & {
  modelValue?: boolean;
  expandButtonLabel?: string;
  collapseButonLabel?: string;
  hideButton?: boolean;
};

export type VueTextOverflowExpandableEmits = (
  event: 'update:modelValue',
  value: boolean,
) => void;
