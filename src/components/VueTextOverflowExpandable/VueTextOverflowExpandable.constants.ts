import { VUE_TEXT_OVERFLOW_DEFAULT_PROPS } from '../VueTextOverflow/VueTextOverflow.constants';
import type { VueTextOverflowExpandableProps } from './VueTextOverflowExpandable.types';

export const VUE_TEXT_OVERFLOW_EXPANDABLE_DEFAULT_PROPS = {
  ...VUE_TEXT_OVERFLOW_DEFAULT_PROPS,
  expandButtonLabel: 'Show more',
  collapseButonLabel: 'Show less',
} satisfies VueTextOverflowExpandableProps;
