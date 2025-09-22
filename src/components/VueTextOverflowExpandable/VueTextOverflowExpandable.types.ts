import type { VueTextOverflowProps } from '@/components/VueTextOverflow';

export type VueTextOverflowExpandableProps = VueTextOverflowProps & {
  modelValue?: boolean;
  expandButtonLabel?: string;
  collapseButonLabel?: string;
  hideButton?: boolean;
};

export type VueTextOverflowExpandableEmits = (
  event: 'update:modelValue',
  value: boolean,
) => void;
